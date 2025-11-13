# TypeScript definitions for Drupal core (forked)

This project is a **fork** of the original Drupal core TypeScript definitions, modified by ortima. It provides Drupal core TypeScript definitions for frontend development in Drupal projects.

## Supporting Drupal core version

Drupal 11

## How to use

1. Add this package to your devDependencies using a Node.js package manager like yarn or npm:
   - `npm i -D ts-for-drupal-core`
   - `yarn add -D ts-for-drupal-core`
2. Configure TypeScript module settings to tsconfig.json like below.
3. Add import type statement on your TypeScript code to load the Drupal core TypeScript definition.
   The library definition is almost same as `core.libraries.yml` definition but **drupalSettings and once.js are not same.** See below example code.

Example tsconfig.json:

```jsonc
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Bundler",
}
```

Example code:

```ts
// Import each library definition.
import type {} from "ts-for-drupal-core/drupal";
import type {} from "ts-for-drupal-core/drupal.ajax";

// The drupalSettings and once.js definitions are not same as the core library definitions.
import type {} from "ts-for-drupal-core/drupal_settings";
import type {} from "ts-for-drupal-core/@drupal__once";
```

### Actually used project

- [Dialog Native](https://www.drupal.org/project/dialog_native)

## Extends Drupal specific type

### drupalSettings

```ts
declare global {
  namespace drupalSettings {
    const someVariable: string | number;
  }
}

/*
 * If there is no export/import in a d.ts file, TS2669 error occurs by TypeScript.
 * See https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul.
 */
export type {};
```

### Drupal.theme

```ts
declare global {
  namespace Drupal {
    namespace theme {
      let someTheme: (arg1: string) => HTMLElement;
    }
  }
}

export type {};
```

### A behavior with additional properties

```ts
declare global {
  namespace Drupal {
    interface behaviorAdditionalPropsMap {
      someBehavior: {
        additionalProp: Array<string>;
      };
    }
  }
}

export type {};
```

### AjaxCommand

```ts
import type { ajaxCommand } from "drupal.ajax";

declare global {
  namespace Drupal {
    interface definedAjaxCommands {
      someCommand: ajaxCommand<
        "someCommand",
        {
          arg1: number;
          arg2: boolean;
        },
        string
      >;
    }
  }
}
```

## FAQ

### I don't want to write `ts-for-drupal-core/` prefix everytime.

1. Create TypeScript base settings file named like tsconfig.base.json on the same directory which located the project package.json.
2. Configure paths settings for tsconfig.base.json like below.
3. Add `extends` settings to each tsconfig.json files, and load this base settings file.

Example of tsconfig.base.json:

```jsonc
{
  "compilerOptions": {
    "paths": {
      "@drupal__once": ["./node_modules/ts-for-drupal-core/@drupal__once"],
      "drupal_settings": ["./node_modules/ts-for-drupal-core/drupal_settings"],
      "drupal.*": ["./node_modules/ts-for-drupal-core/drupal.*/"],
      "drupal": ["./node_modules/ts-for-drupal-core/drupal"]
    }
  }
}
```
