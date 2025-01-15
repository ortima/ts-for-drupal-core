export type detachTrigger = 'unload'|'move'|'serialize';

export type PrototypeFuncs<T extends {}> = {
  [K in keyof T as T[K] extends Function ? K : never]: 
    T[K] extends (...args: infer P) => infer R ? (this: T, ...args: P) => R : never
}

declare global {
  namespace drupalSettings {
    const suppressDeprecationErrors: boolean
  }
  
  namespace Drupal {
    type behaviorAttach = (context: Document|HTMLElement, settings?: Record<string, unknown>) => void
    type behaviorDetach = (context: Document|HTMLElement, settings?: Record<string, unknown>, trigger?: detachTrigger) => void
    type behavior = {
      attach: behaviorAttach,
      detach?: behaviorDetach,
    }
    interface behaviorAdditionalPropsMap {}

    type replacementKeyPrefix = '!'|'@'|'%';
    type replacementKey = `${replacementKeyPrefix}${string}`;

    type themeName = keyof typeof Drupal.theme
    type themeFunction<T extends themeName> = Pick<typeof Drupal.theme, themeName>[T]
    type themeArguments<T extends themeName> = Parameters<themeFunction<T>>

    let locale: {}
    function throwError(error: string|Error): void
    const behaviors: {
      [key in keyof Drupal.behaviorAdditionalPropsMap]: Drupal.behaviorAdditionalPropsMap[key] & behavior;
    } & Record<string, behavior>
    function attachBehaviors(context?: Document|HTMLElement, settings?: Record<string, unknown>): void
    function detachBehaviors(context?: Document|HTMLElement, settings?: Record<string, unknown>, trigger?: detachTrigger): void
    function checkPlain(str: string): string
    function formatString(str: string, args: Record<replacementKey, string>): string
    function t(str: string, args?: Record<replacementKey, string>, options?: {context?: string}): string
    let url: {
      (path: string) : string,
      toAbsolute: (url: string) => string,
      isLocal: (url: string) => boolean,
    }
    function formatPlural(count: number, singular: string, plural: string, args?: Record<replacementKey, string>, options?: {context?: string}): string
    function encodePath(item: string): string
    function deprecationError(deprecation: {message: string}): void
    function deprecatedProperty(deprecation: {target: Record<string, unknown>, deprecatedProperty: string, message: string}): Record<string, unknown>
    function theme<T extends themeName>(func: T, ...args: themeArguments<T>): ReturnType<themeFunction<T>>
    namespace theme {
      function placeholder(str: string): string
    }
    function elementIsVisible(elem: HTMLElement): boolean
    function elementIsHidden(elem: HTMLElement): boolean
  }
}
