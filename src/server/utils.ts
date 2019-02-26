export class Utils {
  /**
   * Returns the value contained in an environment variable
   *
   * @param envVar The name of the environment variable
   * @returns The value contained in specified environment variable
   */
  public static loadFromEnvironmentVariable(envVar: string): any {
    return process.env[envVar];
  }
}
