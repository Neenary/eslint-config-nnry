import type { Linter } from 'eslint';

export declare const base: Linter.Config[];
export declare const browser: Linter.Config[];

export declare const configs: {
  base: Linter.Config[];
  browser: Linter.Config[];
};

export declare const nnrylint: {
  configs: typeof configs;
};

export default nnrylint;
