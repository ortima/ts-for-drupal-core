declare global {
  namespace drupalSettings {
    const path: {
      baseUrl: string,
      scriptPath: null,
      pathPrefix: string,
      currentPath: string,
      currentPathIsAdmin: boolean,
      isFront: boolean,
      currentLanguage: string,
    }
    const pluralDelimiter: string
  }
}

export type {}
