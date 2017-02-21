/**
 * Every task should implement this interface
 */
export interface ITask {
  registerTask(argv: any, dependencies: string[]): string;
}
