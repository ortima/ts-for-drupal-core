import type { PrototypeFuncs } from 'drupal'

declare global {
  namespace Drupal {
    interface DropbuttonConstructor {
      new (dropbutton: HTMLElement, settings: {title: string}): DropButton,
      prototype: PrototypeFuncs<DropButton>,
    }

    type DropButton = {
      $dropbutton: JQuery<HTMLElement>,
      $list: JQuery<HTMLElement>,
      $actions: JQuery<HTMLElement>,
      timerID?: number,
      toggle: (show: boolean) => void,
      hoverIn: () => void,
      hoverOut: () => void,
      open: () => void,
      close: () => void,
      focusOut: (e: JQuery.FocusOutEvent) => void,
      focusIn: (e: JQuery.FocusInEvent) => void,
    }
    var DropButton: DropbuttonConstructor & {
      dropbuttons: Array<DropButton>,
    }

    namespace theme {
      function dropbuttonToggle(options: {title: string}): string
    }
  }
}
