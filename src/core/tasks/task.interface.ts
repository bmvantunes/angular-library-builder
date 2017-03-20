/**
 * Every task should implement this interface
 */
export interface ITask {
  registerTask(argv: any, onError: Function, dependencies: string[]): string;
}
