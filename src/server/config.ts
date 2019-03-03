import { isUndefined, loadFromEnvironmentVariable } from "./utils";

interface EnvironmentVariable {
  name: string;
  value: any;
}

const requiredEnvironmentVariables: Array<string> = ["OPEN_WEATHER_API_KEY"];
const loadedEnvVars: Array<EnvironmentVariable> = [];

export const initEnvironmentVariables = function(): boolean {
  // Loop through all of the required environment variables
  // and store them in the environment variable array.
  let success = true;
  requiredEnvironmentVariables.forEach(envVar => {
    if (success) {
      let value = loadFromEnvironmentVariable(envVar);
      if (isUndefined(value)) {
        // Set the flag to false, and move onto the next iteration of the loop.
        success = false;
        return;
      }

      let obj: EnvironmentVariable = { name: envVar, value: value };
      loadedEnvVars.push(obj);
    }
  });

  return success;
};
