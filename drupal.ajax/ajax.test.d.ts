import { ajaxCommand } from "drupal.ajax"

declare global {
  namespace Drupal {
    interface definedAjaxCommands {
      testCommand: ajaxCommand<'testCommand', {arg1: string, arg2: boolean}>
      testCommand2: ajaxCommand<'testCommand2', {arg1: string, arg2: boolean}, string>
    }
  }
}
