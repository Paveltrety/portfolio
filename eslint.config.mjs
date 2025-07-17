import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// базовые конфиги next/core-web-vitals и next/typescript через FlatCompat
const baseConfigs = [...compat.extends('next/core-web-vitals', 'next/typescript')];

const pluginsAndRules = {
  plugins: {
    'simple-import-sort': simpleImportSort,
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none', varsIgnorePattern: '^_' }],
  },
};

const eslintConfig = [...baseConfigs, pluginsAndRules];

export default eslintConfig;
