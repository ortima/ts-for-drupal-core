/// <reference path="./index.d.ts" />

(drupalSettings => {
  const { path, pluralDelimiter } = drupalSettings;
  const { baseUrl, currentLanguage, currentPath, currentPathIsAdmin, isFront, pathPrefix, scriptPath } = path;
})(drupalSettings);
