import type { ajaxCommand } from 'drupal.ajax';

declare global {
  namespace Drupal {
    interface behaviorAdditionalPropsMap {
      dialog: {
        prepareDialogButtons($dialog: JQuery<HTMLElement>): Array<JQueryUI.DialogButtonOptions>
      }
    }

    interface definedAjaxCommands {
      openDialog: ajaxCommand<
        'openDialog',
        {
          selector: string,
          data: string|Array<Record<string, string>>,
          settings?: Record<string, unknown>,
          dialogOptions: JQueryUI.DialogOptions & {
            drupalAutoButtons?: boolean,
            drupalOffCanvasPosition?: 'side'|'top'
          },
          effect?: 'fade',
          speed?: number,
        },
        void|false
      >,
      closeDialog: ajaxCommand<
        'closeDialog',
        {
          selector: string,
          persist: boolean,
        }
      >,
      setDialogOption: ajaxCommand<
        'setDialogOption',
        {
          selector: string,
          optionName: string,
          optionValue: unknown,
        }
      >,
    }
  }
}
