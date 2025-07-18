import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { 
    ignores: ['dist', 'coverage'] 
  },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: {...globals.browser, ...globals.node, ...globals.jest}, sourceType: 'module', ecmaVersion: 'latest' } },
]);