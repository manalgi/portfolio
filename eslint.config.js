import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import spellcheck from 'eslint-plugin-spellcheck';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'vite.config.ts',
      'node_modules',
      '.history',
      'eslint.config.js',
      'dist',
      '.dependency-cruiser.cjs',
    ],
  },
  {
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md#when-not-to-use-it
      react.configs.flat['jsx-runtime'],
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      eslintConfigPrettier,
    ],
    languageOptions: {
      ecmaVersion: 2023,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      spellcheck,
      react,
      importPlugin,
      eslintConfigPrettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // The eslint-plugin-import cannot automatically read type aliases and produces a lot of errors
      // Therefore, turning it off. The alternative would be to add yet another package
      // to the project and specify even more configuration, which we don't want to do.
      'import/no-unresolved': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'spellcheck/spell-checker': [
        'warn',
        {
          lang: 'en_US',
          minLength: 5,
          skipWords: ['vite', 'keyframes', 'pallete'],
          skipWordIfMatch: ['(A|a)lerto'],
        },
      ],
      /**
       *  Emotion uses the css prop for styling components
       *  This rule is added to ignore linting errors for the css property used by Emotion.
       *  however @emotion/eslint-plugin is not compatible yet with eslint version 9, so it is a temporary solution till the plugin is updated
       */
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
    },
  }
);