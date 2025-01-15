export type ariaLiveValue = 'off'|'polite'|'assertive';

declare global {
  namespace Drupal {
    function announce(text: string, priority?: ariaLiveValue): void
  }
}
