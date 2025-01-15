import type { PrototypeFuncs } from 'drupal';

type AcceptableHTTPMethod = 'GET'|'POST';

export type ProgressBar = {
  id: string,
  method: AcceptableHTTPMethod,
  updateCallback: (percentage: number, message: string, progressBar: ProgressBar) => void,
  errorCallback: (progressBar: ProgressBar) => void,
  element: JQuery<HTMLElement>,
  delay: number,
  uri: string|null,
  timer: number,
  setProgress: (percentage: number, message: string, label?: string) => void,
  startMonitoring: (uri: string, delay: number) => void,
  stopMonitoring: () => void,
  sendPing: () => void,
  displayError: (string: string) => void,
}

declare global {
  namespace Drupal {
    interface ProgressBarConstructor {
      new (id: string, updateCallback?: (percentage: number, message: string, progressBar: ProgressBar) => void, method?: AcceptableHTTPMethod, errorCallback?: (progressBar: ProgressBar) => void): ProgressBar,
      prototype: PrototypeFuncs<ProgressBar>,
    }

    let ProgressBar: ProgressBarConstructor

    namespace theme {
      function progressBar(id: string): string
    }
  }
}
