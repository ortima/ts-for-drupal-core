import type { PrototypeFuncs } from 'drupal';

export type verticalTab = {
  details: JQuery<HTMLElement>,
  item: JQuery<HTMLElement>,
  link: JQuery<HTMLElement>,
  title: JQuery<HTMLElement>,
  summary: JQuery<HTMLElement>,
  focus: () => void,
  updateSummary: () => void,
  tabShow: () => verticalTab,
  tabHide: () => verticalTab,
}

declare global {
  namespace drupalSettings {
    const widthBreakpoint: number|undefined
  }
  namespace Drupal {

    interface verticalTabConstructor {
      new (settings: {title: string, details: JQuery<HTMLElement>}): verticalTab,
      prototype: PrototypeFuncs<verticalTab>
    }

    let verticalTab: verticalTabConstructor

    namespace theme {
      function verticalTab(settings: {title: string}): {
        item: JQuery<HTMLElement>,
        link: JQuery<HTMLElement>,
        title: JQuery<HTMLElement>,
        summary: JQuery<HTMLElement>,
      }
    }
  }
}
