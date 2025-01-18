export type dialogDefinition = {
  open: boolean,
  returnValue?: unknown,
  show: () => void,
  showModal: () => void,
  close: (value?: unknown) => void,
}

declare global {
  namespace drupalSettings {
    const dialog: {
      autoOpen: boolean,
      dialogClass: string,
      buttonClass: string,
      buttonPrimaryClass: string,
      close: (event: Event) => void,
      modal?: boolean,
      autoResize?: boolean,
      maxHeight: string,
    }
  }
  namespace Drupal {
    var dialog: (element: HTMLElement|JQuery<HTMLElement>, options?: JQueryUI.DialogOptions) => dialogDefinition
  }
}
