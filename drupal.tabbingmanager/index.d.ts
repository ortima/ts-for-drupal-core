declare global {
  namespace Drupal {
    let tabbingManager: tabbingManager
  }

  type TabbingContext = {
    level: null|number,
    $tabbableElements: JQuery<HTMLElement>,
    $disabledElements: JQuery<HTMLElement>,
    released: boolean,
    active: boolean,
    trapFocus: boolean,
    release: () => void,
    activate: () => void,
    deactivate: () => void,
  }
  
  type tabbingManager = {
    stack: Array<TabbingContext>,
    constrain: (elements: JQuery<HTMLElement>|Array<Element>, object?: {trapFocus: boolean}) => TabbingContext,
    release: () => void,
    activate: (tabbingContext: TabbingContext) => void,
    deactivate: (tabbingContext: TabbingContext) => void,
    recordTabindex: ($el: JQuery<HTMLElement>, level: number) => void,
    restoreTabindex: ($el: JQuery<HTMLElement>, level: number) => void,
  }
}

export type {}