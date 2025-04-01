import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Import organization rules
      "sort-imports": ["error", {
        "ignoreCase": true,
        "ignoreDeclarationSort": true // Let import/order handle declaration sorting
      }],
      "import/order": ["error", {
        "groups": [
          ["builtin", "external"],
          "internal",
          ["parent", "sibling"],
          "index",
          "object",
          "type"
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "next/**",
            "group": "builtin",
            "position": "before"
          },
          {
            "pattern": "@/app/components/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "@/app/utils/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@/app/constants/**",
            "group": "internal",
            "position": "after"
          },
          {
            "pattern": "@/app/types/**",
            "group": "type",
            "position": "before"
          },
          {
            "pattern": "**/*.css",
            "group": "index",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "newlines-between": "always"
      }]
    }
  }
];

export default eslintConfig;
