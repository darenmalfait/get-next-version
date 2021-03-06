module.exports = {
  parser: `babel-eslint`,
  extends: [`google`, `eslint:recommended`, `prettier`],
  plugins: [`prettier`, `babel`],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: `module`,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'arrow-body-style': `off`,
    'object-shorthand': [`error`, `properties`],
    'prefer-arrow-callback': [
      `error`,
      { allowNamedFunctions: true, allowUnboundThis: true },
    ],
    'prefer-destructuring': `off`, // I like it, but not that much...
    'sort-imports': `off`,
    'babel/camelcase': `off`,
    'new-cap': `off`,
    'babel/new-cap': [
      `error`,
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    'no-invalid-this': `off`,
    'babel/no-invalid-this': `error`,
    'no-class-assign': `error`,
    'no-duplicate-imports': `error`,
    'no-restricted-exports': `off`,
    'no-restricted-imports': `off`,
    'no-useless-computed-key': `error`,
    'no-useless-constructor': `error`,
    'no-useless-rename': `error`,
    'no-var': `error`,
    'prefer-const': `error`,
    'prefer-numeric-literals': `error`,
    'prefer-rest-params': `error`,
    'prefer-spread': `error`,
    'prefer-template': `error`,
    'require-yield': `error`,
    'symbol-description': `error`,
    'constructor-super': `error`,
    'no-const-assign': `error`,
    'no-dupe-class-members': `error`,
    'no-new-symbol': `error`,
    'no-this-before-super': `error`,
    'no-unsafe-optional-chaining': `error`,
    'no-unused-expressions': `off`,
    'no-unused-vars': [
      `warn`,
      {
        varsIgnorePattern: `^_`,
        argsIgnorePattern: `^_`,
        ignoreRestSiblings: true,
      },
    ],
    'babel/no-unused-expressions': `error`,
    'valid-typeof': `off`,
    'babel/valid-typeof': `error`,
    'require-jsdoc': `off`,
    'valid-jsdoc': `off`,
  },
  overrides: [
    {
      files: [`**/*.ts?(x)`],
      parser: `@typescript-eslint/parser`,
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: `module`,
      },
      plugins: [`@typescript-eslint/eslint-plugin`],
      extends: [`plugin:@typescript-eslint/recommended`],
      rules: {
        'babel/no-invalid-this': `off`,
        '@typescript-eslint/no-invalid-this': `error`,
        'no-var': `error`,
        'prefer-const': `error`,
        'prefer-rest-params': `error`,
        'prefer-spread': `error`,
        'no-duplicate-imports': `off`,
        '@typescript-eslint/no-duplicate-imports': `error`,
        'no-useless-constructor': `off`,
        '@typescript-eslint/no-useless-constructor': `error`,
        'constructor-super': `off`,
        'no-const-assign': `off`,
        'no-new-symbol': `off`,
        'no-this-before-super': `off`,
        'babel/valid-typeof': `off`,
        'no-dupe-class-members': `off`,
        '@typescript-eslint/no-dupe-class-members': `off`,
        'babel/no-unused-expressions': `off`,
        '@typescript-eslint/no-unused-expressions': `error`,
        '@typescript-eslint/explicit-module-boundary-types': [
          `warn`,
          {
            allowArgumentsExplicitlyTypedAsAny: true,
          },
        ],
        '@typescript-eslint/no-empty-function': `off`,
        '@typescript-eslint/no-explicit-any': `off`,
        '@typescript-eslint/ban-types': [
          `error`,
          {
            extendDefaults: true,
            types: {
              '{}': {
                fixWith: `Record<string, unknown>`,
              },
              object: {
                fixWith: `Record<string, unknown>`,
              },
            },
          },
        ],
        camelcase: `off`,
        '@typescript-eslint/naming-convention': [
          `error`,
          {
            selector: `default`,
            format: [`camelCase`],
          },
          {
            selector: `variable`,
            format: [`camelCase`, `UPPER_CASE`, `PascalCase`],
            leadingUnderscore: `allowSingleOrDouble`,
            trailingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `function`,
            format: [`camelCase`, `PascalCase`],
            leadingUnderscore: `allow`,
          },
          {
            selector: `parameter`,
            format: [`camelCase`, `PascalCase`, `snake_case`],
            leadingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `enumMember`,
            format: [`camelCase`, `UPPER_CASE`, `PascalCase`],
          },
          {
            selector: `typeLike`,
            format: [`PascalCase`],
          },
          {
            selector: `typeAlias`,
            format: [`camelCase`, `PascalCase`],
          },
          {
            selector: `property`,
            format: [`PascalCase`, `UPPER_CASE`, `camelCase`, `snake_case`],
            leadingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `objectLiteralProperty`,
            format: [`PascalCase`, `UPPER_CASE`, `camelCase`, `snake_case`],
            leadingUnderscore: `allowSingleOrDouble`,
            trailingUnderscore: `allowSingleOrDouble`,
          },
          {
            selector: `enum`,
            format: [`PascalCase`, `UPPER_CASE`],
          },
          {
            selector: `method`,
            format: [`PascalCase`, `camelCase`],
            leadingUnderscore: `allowSingleOrDouble`,
          },
        ],
      },
    },
  ],
};
