declare global {
  namespace Drupal {
    var offCanvas: {
      position: string|null,
      minimumHeight: number,
      minDisplaceWidth: number,
      $mainCanvasWrapper: JQuery<HTMLElement>,
      isOffCanvas: ($element: JQuery<HTMLElement>) => boolean,
      removeOffCanvasEvents: ($element: JQuery<HTMLElement>) => void,
      beforeCreate: (settings: {settings: JQueryUI.DialogOptions, $element: JQuery<HTMLElement>}) => void,
      beforeClose: (settings: {$element: JQuery<HTMLElement>}) => void,
      afterCreate: (settings: {$element: JQuery<HTMLElement>, settings: JQueryUI.DialogOptions}) => void,
      render: (settings: {settings: JQueryUI.DialogOptions}) => void,
      handleDialogResize: (event: JQuery.TriggeredEvent<HTMLElement, undefined, HTMLElement, HTMLElement>) => void,
      resetSize: (event: JQuery.ClickEvent<Window & typeof globalThis, undefined, Window & typeof globalThis, Window & typeof globalThis>) => void,
      bodyPadding: (event: JQuery.TriggeredEvent<HTMLElement, undefined, HTMLElement, HTMLElement>) => void,
      getContainer: ($element: JQuery<HTMLElement>) => JQuery<HTMLElement>,
      getEdge: () => 'left'|'right',
      resetPadding: () => void, 
    }
  }
}

export type {}