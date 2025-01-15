import type { ajaxCommand } from 'drupal.ajax';

declare global {
  namespace Drupal {
    interface definedAjaxCommands {
      tabledragChanged: ajaxCommand<
        'tabledragChanged',
        {
          id: string,
          tabledrag_instance: string,
        }
      >
    }
  }
}