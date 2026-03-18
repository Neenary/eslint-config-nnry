// @ts-check
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
/**
 * @typedef {import('eslint/rules/stylistic-issues').StylisticIssues} StylisticIssues
 * @typedef {{ [K in keyof StylisticIssues as `@stylistic/${K}`]: StylisticIssues[K] }} StylisticRules
 * @typedef {import('eslint/rules/possible-errors').PossibleErrors} PossibleErrors
 * @typedef {import('eslint/rules/best-practices').BestPractices} BestPractices
 * @typedef {import('eslint/rules').ESLintRules} ESLintRules
 * @typedef {PossibleErrors & BestPractices} JSRules
 * @typedef {{ [K in keyof ESLintRules as `@typescript-eslint/${K}`]: ESLintRules[K] }} TSRules
 * */

/** @type{Partial<StylisticRules>} */
const stylisticRules = {
  '@stylistic/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/quotes': ['error', 'single'],
  '@stylistic/no-multiple-empty-lines': ['error'],
  '@stylistic/indent': ['error', 2],
};
/** @type {Partial<JSRules>} */
const jsRules = {
  'no-empty': ['error'],
  'no-empty-function': ['error'],
};

/** @type {Partial<TSRules>} */
const tsRules = {
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
};

/** @type {import('eslint').Linter.Config[]} */
export const base = defineConfig([
  {
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...jsRules,
      ...tsRules,
    },
  },
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: stylisticRules,
  },
]);

export const browser = defineConfig([
  {
    languageOptions: { globals: globals.browser }
  },
  ...base,
]);

export const configs = {
  base,
  browser,
};

export const nnrylint = {
  configs,
};

export default nnrylint;
