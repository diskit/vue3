import TaskStorage from "@/driver/task-storage";
import { Task } from '@/domain/task';

export interface TodoPort {
  get(): Promise<Task[]>;
}

export class TodoGateway implements TodoPort {
  constructor(private readonly storage: TaskStorage) {}

  async get(): Promise<Task[]> {
    return this.storage.get().map((v) => new Task(v));
  }
}

