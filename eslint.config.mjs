import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: ["dist/main.js", "src/README.md"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
