/**
 * Returns the value contained in an environment variable.
 *
 * @param envVar The name of the environment variable
 * @returns The value contained in specified environment variable
 */
export const loadFromEnvironmentVariable = function(envVar: string): any {
  return process.env[envVar];
};

/**
 * Checks if supplied object is undefined or not.
 * @param objToCheck The object to check
 * @returns True/False
 */
export const isUndefined = function(objToCheck: any): boolean {
  return typeof objToCheck === "undefined";
};
