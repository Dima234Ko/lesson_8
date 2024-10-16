import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    ignores: ["docs/main.js", "src/README.md", "src/bootstrap"],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
