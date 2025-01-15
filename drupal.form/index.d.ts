interface JQuery {
  drupalGetSummary: () => string,
  drupalSetSummary: (callback: string|((context: HTMLElement) => string)) => JQuery<HTMLElement>,
}