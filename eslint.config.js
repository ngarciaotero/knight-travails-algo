import { eslintPluginPrettier, eslintConfigPrettier } from "@eslint/prettier";

export default [
  { ignores: ["node_modules"] },
  {
    files: ["**/*.js"],
    languageOptions: { ecmaVersion: 2024, sourceType: "module" },
    plugins: { prettier: eslintPluginPrettier },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    rules: {
      "prettier/prettier": "error",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-console": "off",
      indent: ["error", 2],
      "no-unused-vars": "warn",
    },
  },
];
