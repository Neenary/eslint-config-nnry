import type { Linter } from 'eslint';

type Flat = Linter.FlatConfig;

export declare const base: Flat[];
export declare const browser: Flat[];

export declare const configs: {
  base: Flat[];
  browser: Flat[];
  svelte: Flat[];
};

export declare const nnrylint: {
  configs: typeof configs;
};

export default nnrylint;
