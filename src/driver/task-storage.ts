export default class TaskStorage {
  private readonly values: string[] = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

  get(): string[] {
    return this.values;
  }
}
