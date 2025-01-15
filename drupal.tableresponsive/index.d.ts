import type { PrototypeFuncs } from 'drupal';

export type tableResponsive = {
  table: HTMLTableElement,
  $table: JQuery<HTMLTableElement>,
  showText: string,
  hideText: string,
  $headers: JQuery<HTMLTableCellElement>,
  $link: JQuery<HTMLElement>,
  eventhandlerEvaluateColumnVisibility: (e: JQuery.Event) => void,
  eventhandlerToggleColumns: (e: JQuery.Event) => void,
}

declare global {
  namespace Drupal {
    interface tableResponsiveConstructor {
      new (table: HTMLTableElement): tableResponsive,
      prototype: PrototypeFuncs<tableResponsive>
    }

    var TableResponsive: tableResponsiveConstructor & {
      tables: Array<tableResponsive>
    }
  }
}
