import type { ariaLiveValue } from "drupal.announce";

declare global {
  namespace Drupal {
    class Message {
      constructor (messageWrapper?: HTMLElement)
      static defaultWrapper: () => HTMLElement
      static getMessageTypeLabels: () => Record<messageType, string>
      static announce: (message: string, options?: {announce: string, priority?: ariaLiveValue, type: messageType}) => void
      static messageInternalWrapper: (messageWrapper: HTMLElement) => HTMLElement
      add: (message: string, options?: messageOptions) => string
      select: (id: string) => HTMLElement
      remove: (id: string) => HTMLElement
      clear: () => void
    }

    namespace theme {
      function message(message: {text: string}, options: {type: messageType, id: string}): HTMLElement
    }
  }
}

export type messageType = 'status'|'error'|'warning';

export type messageOptions = {
  id?: string,
  type?: messageType,
  announce?: string,
  priority?: ariaLiveValue,
}