import { inject, InjectionKey, provide, reactive } from '@vue/composition-api';
import TodoUsecase from "./usecase/todo-usecase";
import TaskStorage from "./driver/task-storage";
import TodoState from "./views/state/todo-state";
import { TodoPort, TodoGateway } from "./gateway/todo-port";
import TodoPresenter from "./presenter/todo-presenter";

export default class Injector {
  constructor() {}

  injectModules(): void {
    this.injectDriver();
    this.injectState();
    this.injectPort();
    this.injectPresenter();
    this.injectUsecase();
  }

  private injectDriver(): void {
    provide(Keys.TaskStorageKey, new TaskStorage());
  }

  private injectState() {
    provide(Keys.TodoStateKey, reactive(new TodoState()))
  }

  private injectPort() {
    provide(
      Keys.TodoPortKey,
      new TodoGateway(inject(Keys.TaskStorageKey)!!)
    );
  }

  private injectPresenter() {
    provide(
      Keys.TodoPresenterKey,
      new TodoPresenter(inject(Keys.TodoStateKey)!!)
    );
  }

  private injectUsecase() {
    provide(
      Keys.TodoUsecaseKey,
      new TodoUsecase(
        inject(Keys.TodoPortKey)!!,
        inject(Keys.TodoPresenterKey)!!
      )
    );
  }
}

export class Keys {
  static readonly TaskStorageKey: InjectionKey<TaskStorage> = Symbol(
    "task-storage"
  );
  static readonly TodoUsecaseKey: InjectionKey<TodoUsecase> = Symbol(
    "task-usecase"
  );
  static readonly TodoPresenterKey: InjectionKey<TodoPresenter> = Symbol(
    "task-presenter"
  );
  static readonly TodoStateKey: InjectionKey<TodoState> = Symbol("todo-state");
  static readonly TodoPortKey: InjectionKey<TodoPort> = Symbol("todo-port");
}
