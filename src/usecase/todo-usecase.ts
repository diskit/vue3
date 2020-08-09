import TodoPresenter from "@/presenter/todo-presenter";
import { TodoPort } from "@/gateway/todo-port";

export default class TodoUsecase {
  constructor(readonly gateway: TodoPort, readonly presenter: TodoPresenter) {}

  async get(): Promise<void> {
    this.presenter.update(await this.gateway.get());
  }
}
