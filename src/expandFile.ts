/* eslint-disable no-undef */
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'dotenv';
import { expand } from 'dotenv-expand';

export type IOptions = {
  cwd: string;
  envFile: string;
  injectEnv?: boolean;
};

export type parsedData = Record<string, string>;

export function loadEnv(opts: IOptions) {
  const { cwd, envFile, injectEnv = true } = opts;
  const file = join(cwd, envFile);
  console.log(file);
  if (!existsSync(file)) return;
  const parsed: parsedData = parse(readFileSync(file)) || {};
  expand({ parsed, ignoreProcessEnv: true });
  if (injectEnv) {
    for (const key of Object.keys(parsed)) {
      process.env[key] = parsed[key];
    }
  }
  return parsed;
}
