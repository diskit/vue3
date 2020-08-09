import TodoState from "@/views/state/todo-state";
import { Task } from '@/domain/task';

export default class TodoPresenter {
  constructor(private readonly state: TodoState) {}

  update(values: Task[]) {
    this.state.values = values.map((v) => v.value);
  }
}
