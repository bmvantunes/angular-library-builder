/**
 * Every task should implement this interface
 */
export interface ITask {
  registerTask(argv: any, onError: () => void, dependencies: string[]): string;
}
