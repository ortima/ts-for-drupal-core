import type{ PrototypeFuncs } from 'drupal';

type rowSettings = {
  target: null|string,
  source: null|string,
  relationship: 'parent'|'sibling'|'self'|'group',
  action: 'match'|'order'|'depth',
  hidden: boolean,
  limit: number,
}

export type tableSettings = Record<string, Record<number, rowSettings>>

type dragOrientation = 'drag'|'drag-y'

type tableDrag = {
  $table: JQuery<HTMLTableElement>,
  table: HTMLTableElement & {topY ?: number, bottomY?: number},
  tableSettings: tableSettings,
  dragObject: null|HTMLElement,
  rowObject: null|tableDragRow,
  oldRowElement: null|HTMLElement,
  oldY: null|number,
  changed: boolean,
  maxDepth: number,
  rtl: -1|1,
  striping: boolean,
  scrollSettings: {amount: number, interval: number, trigger: number },
  scrollInterval: null|number,
  scrollY: number,
  windowHeight: number,
  $toggleWeightButton: null|JQuery<HTMLElement>,
  indentEnabled: boolean,
  changedRowIds: Set<string>,
  dragOrientation: dragOrientation,
  indentCount?: number,
  indentAmount?: number,
  safeBlur?: boolean,
  currentPointerCoords?: {
    x: number;
    y: number;
  },
  initColumns: () => void,
  addColspanClass: (columnIndex: number) => () => void,
  displayColumns: (displayWeight: boolean) => void,
  toggleColumns: () => void,
  hideColumns: () => void,
  showColumns: () => void,
  rowSettings: (group: string, row: HTMLElement) => rowSettings,
  makeDraggable: (item: HTMLElement) => void,
  dragStart: (event: JQuery.Event, self: tableDrag, item: HTMLElement) => void,
  dragRow: (event: JQuery.Event, self: tableDrag) => false|void,
  dropRow: (event: JQuery.Event, self: tableDrag) => void,
  pointerCoords: (event: JQuery.Event) => {x: number, y: number},
  getPointerOffset: (target: HTMLElement, event: JQuery.Event) => {x: number, y: number},
  findDropTargetRow: (x: number, y: number) => null|HTMLElement,
  updateFields: (changedRow: HTMLElement) => void,
  updateField: (changedRow: HTMLElement, group: string) => void,
  copyDragClasses: (sourceRow: HTMLElement, targetRow: HTMLElement, group: string) => void,
  checkScroll: (cursorY: number) => number,
  setScroll: (scrollAmount: number) => void,
  restripeTable: () => void,
  onDrag: () => unknown,
  onDrop: () => unknown,
  row: {
    new (tableRow: HTMLElement, method: tableDragRow['method'], indentEnabled: boolean, maxDepth: number, addClasses: boolean): tableDragRow,
    prototype: PrototypeFuncs<tableDragRow>
  },
}

type tableDragRow = {
  element: HTMLElement,
  method: 'keyboard'|'mouse'|'pointer'|'',
  group: Array<HTMLElement>,
  groupDepth: number,
  changed: boolean,
  table: HTMLTableElement,
  indentEnabled: boolean,
  maxDepth: number,
  direction: 'down'|'up',
  indents?: number,
  children?: unknown[],
  interval?: {
    min: number;
    max: number;
  }|null,
  addChangedWarning: () => void,
  findChildren: (addClasses: boolean) => unknown[],
  isValidSwap: (row: HTMLElement) => boolean,
  swap: (position: 'after'|'before', row: HTMLElement) => void,
  validIndentInterval: (prevRow: HTMLElement|null, nextRow: HTMLElement|null) => { min: number, max: number },
  indent: (indentDiff: number) => number,
  findSiblings: (rowSettings: rowSettings) => Array<HTMLElement>,
  removeIndentClasses: () => void,
  markChanged: () => void,
  onIndent: () => unknown,
  onSwap: (swappedRow: HTMLElement) => unknown,
}

declare global {
  namespace drupalSettings {
    const tableDrag: {
      [table_id: string]: tableSettings,
    }
  }
  namespace Drupal {
    var tableDrag: {
      new (table: HTMLTableElement, tableSettings: tableSettings): tableDrag,
      prototype: {
        row: {
          new (tableRow: HTMLElement, method: 'keyboard'|'mouse'|'pointer', indentEnabled: boolean, maxDepth: number, addClasses: boolean): tableDragRow,
          prototype: PrototypeFuncs<tableDragRow>
        }
      } & PrototypeFuncs<Omit<tableDrag, 'row'>>
    } & Record<string, tableDrag>

    namespace theme {
      function tableDragChangedMarker(): string
      function tableDragIndentation(): string
      function tableDragChangedWarning(): string
      function tableDragToggle(): string
      function toggleButtonContent(show: boolean): string
      function tableDragHandle(dragOrientation?: dragOrientation): string
    }
  }
}
