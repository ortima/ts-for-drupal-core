import type { ProgressBar } from 'drupal.progress';
import type { messageOptions } from 'drupal.message';
import type { ariaLiveValue } from 'drupal.announce';
import type { PrototypeFuncs } from 'drupal';

export type ajaxCommand<K extends string, P, R = void> = (ajax: Ajax, response: {command: K} & P, status: number) => R;

type progressType = 'throbber'|'bar'|'fullscreen';
type speedValueType = 'none'|'slow'|'fast'|number;

export type Ajax = {
  commands: Drupal.definedAjaxCommands,
  instanceIndex: false|number,
  element: HTMLElement|false,
  preCommandsFocusedElementSelector: string|null,
  elementSettings: Drupal.ajaxSettings,
  $form?: JQuery<HTMLElement>,
  url: string,
  options: JQueryAjaxSettings & {
    isInProgress(): boolean,
  },
  ajaxing: boolean,
  settings: unknown,
  execute: () => void|JQuery.jqXHR<any>|JQuery.Deferred<any, any, any>,
  keypressResponse: (element: HTMLElement, event: JQuery.Event) => void,
  eventResponse: (element: HTMLElement, event: JQuery.Event) => void,
  beforeSerialize: (element: HTMLElement, options: JQueryAjaxSettings) => void,
  beforeSubmit: (formValues: Array<Record<string, unknown>>, element: JQuery<HTMLElement>, options: JQueryAjaxSettings) => void,
  beforeSend: (xmlhttprequest: XMLHttpRequest, options: JQueryAjaxSettings) => void,
  commandExecutionQueue: (response: Array<Parameters<Drupal.definedAjaxCommands[keyof Drupal.definedAjaxCommands]>[1]>, status: number|JQuery.Ajax.SuccessTextStatus) => Promise<void>,
  success: (response: Array<Parameters<Drupal.definedAjaxCommands[keyof Drupal.definedAjaxCommands]>[1]>, status: number|JQuery.Ajax.SuccessTextStatus) => Promise<void>,
  getEffect: (response: Parameters<Drupal.definedAjaxCommands[keyof Drupal.definedAjaxCommands]>[1]) => {
    showEffect: 'show'|'fadeIn'|'slideToggle',
    hideEffect: 'hide'|'fadeOut'|'slideToggle',
    showSpeed: speedValueType,
  },
  error: (xmlhttprequest: XMLHttpRequest, uri: string, customMessage?: string) => void,
  httpMethod: 'POST'|'GET'
} & {
  [key in progressType as `setProgressIndicator${Capitalize<progressType>}`]: () => void
} & Drupal.ajaxSettings

declare global {
  namespace drupalSettings {
    const ajaxPageState: {
      libraries: string,
      theme: null|string,
      theme_token: string,
    }
    const ajaxTrustedUrl: Record<string, true>
    const ajax: {[base: string]: Drupal.ajaxSettings}
  }

  namespace Drupal {

    interface AjaxError extends Error {
    }
    
    interface AjaxErrorConstructor extends ErrorConstructor {
        new(xmlhttp: XMLHttpRequest, uri: string, customMessage?: string): AjaxError;
        // jQuery support
        new(xmlhttp: JQuery.jqXHR<any>, uri: string, customMessage?: string): AjaxError;
        readonly prototype: AjaxError;
    }
    
    const AjaxError: AjaxErrorConstructor

    const ajax: {
      (settings: ajaxSettings & {base?: string, element?: HTMLElement}): Ajax,
      instances: Array<Ajax|null>,
      expired: () => Array<Ajax>,
      bindAjaxLinks: (element: HTMLElement) => void,
      WRAPPER_FORMAT: string,
    }

    interface AjaxConstructor {
      new (base: string|false, element: HTMLElement|false, elementSettings: ajaxSettings): Ajax,
      prototype: PrototypeFuncs<Ajax>,
    }

    let Ajax: AjaxConstructor

    interface ajaxSettings {
      wrapper?: string,
      method?: 'replaceWith'|'append'|'prepend'|'before'|'after'|'html'|'replaceAll'|'empty'|'remove'|'focus',
      effect?: 'none'|'slide'|'fade',
      speed?: speedValueType,
      event?: string|null,
      prevent?: string,
      progress?: {
        type: progressType,
        message?: string,
        url?: string,
        interval?: number,
        element?: HTMLElement|JQuery<HTMLElement>,
        object?: ProgressBar,
        method?: string,
      }|false,
      url?: string,
      httpMethod?: 'POST'|'GET',
      keypress?: boolean,
      selector?: string|null,
      submit?: {
        js: boolean,
      },
      /** @see https://www.drupal.org/docs/drupal-apis/ajax-api/ajax-dialog-boxes */
      dialog?: JQueryUI.DialogOptions,
      dialogType?: 'modal'|'dialog',
      dialogRenderer?: 'off_canvas'|'off_canvas_top'|string,

      setClick?: boolean,
    }

    interface definedAjaxCommands {
      insert: ajaxCommand<
        'insert',
        {
          data: string|Array<Record<string, string>>,
          method?: 'replaceWith'|'append'|'prepend'|'before'|'after'|'html'|'replaceAll',
          selector?: string,
          settings?: Record<string, unknown>,
        }
      >,
      remove: ajaxCommand<
        'remove',
        {
          selector: string,
          settings?: Record<string, unknown>,
        }
      >,
      changed: ajaxCommand<
        'changed',
        {
          selector: string,
          asterisk?: string,
        }
      >,
      alert: ajaxCommand<'alert', {text: string}>,
      announce: ajaxCommand<
        'announce',
        {
          text: string,
          priority?: ariaLiveValue,
        }
      >,
      redirect: ajaxCommand<
        'redirect',
        {
          url: string,
        }
      >,
      css: ajaxCommand<
        'css',
        {
          selector: string,
          argument: Record<string, string>,
        }
      >,
      settings: ajaxCommand<
        'settings',
        {
          merge: boolean,
          settings: Record<string, unknown>,
        }
      >,
      data: ajaxCommand<
        'data',
        {
          name: string,
          selector: string,
          value: string|Record<string, unknown>,
        }
      >,
      focusFirst: ajaxCommand<
        'focusFirst',
        {
          selector: string,
        }
      >,
      invoke: ajaxCommand<
        'invoke',
        {
          selector: string,
          method: keyof JQuery<HTMLElement>,
          args: Array<unknown>,
        }
      >,
      restripe: ajaxCommand<
        'restripe',
        {
          selector: string,
        }
      >,
      update_build_id: ajaxCommand<
        'update_build_id',
        {
          old: string,
          new: string,
        }
      >,
      add_css: ajaxCommand<
        'add_css',
        {
          data: Array<Record<string, string>>,
        }
      >,
      message: ajaxCommand<
        'message',
        {
          message: string,
          messageWrapperQuerySelector: string|null,
          messageOptions?: messageOptions,
          clearPrevious: boolean
        }
      >,
      add_js: ajaxCommand<
        'add_js',
        {
          selector: string,
          data: Array<
            {
              src: string
            } & Record<string, string>
          >
        }
      >,
      scrollTop: ajaxCommand<
        'scrollTop',
        {
          selector: string,
        }
      >,
    }

    const AjaxCommands: {
      new(): Drupal.definedAjaxCommands,
      prototype: Drupal.definedAjaxCommands,
    }

    namespace theme {
      /** @deprecated see https://www.drupal.org/node/2940704 */
      function ajaxWrapperNewContent<K extends keyof Drupal.definedAjaxCommands>($newContent: JQuery<HTMLElement>, ajax: Ajax, response: Parameters<Drupal.definedAjaxCommands[K]>[1]): JQuery<HTMLElement>
      /** @deprecated see https://www.drupal.org/node/2940704 */
      function ajaxWrapperMultipleRootElements($elements: JQuery<HTMLElement>): JQuery<HTMLElement>
      function ajaxProgressBar($element: JQuery<HTMLElement>): JQuery<HTMLElement>
      function ajaxProgressThrobber(message: string):  string
      function ajaxProgressMessage(message: string): string
      function ajaxProgressIndicatorFullscreen(): string
    }
  }

}
