declare global {
  namespace Drupal {
    function debounce<R>(func: () => R, wait: number, immediate?: boolean): R
    function debounce<P extends unknown[], R>(func: (...args: P) => R, wait: number, immediate?: boolean): R
  }
}

export type {}