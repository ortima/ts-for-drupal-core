/// <reference path="./index.d.ts" />

import type { tableDrag } from ".";

((drupalSettings ,Drupal) => {
  const { tableDrag } = drupalSettings;
  const tableSettings = tableDrag['test_table_id']['test_drag_id'];
  const { action, hidden, limit, relationship, source, target } = tableSettings[1];


  Drupal.tableDrag.prototype.onDrag = function () {
    return console.log(this);
  }

  Drupal.tableDrag.prototype.onDrop = function () {
    return console.log(this);
  }

  Drupal.tableDrag.prototype.row.prototype.onIndent = function() {
    return console.log(this);
  }

  Drupal.tableDrag.prototype.row.prototype.onSwap = function(swappedRow) {
    return swappedRow.nodeName;
  }

  const testTable = document.querySelector<HTMLTableElement>('#test_table_id');
  let testTableDrag: tableDrag|undefined = undefined;
  if (testTable) {
    testTableDrag = new Drupal.tableDrag(
      testTable,
      {
        'test_drag_id': [{
          action: 'depth',
          hidden: false,
          limit: 10,
          relationship: 'group',
          source: 'test_resourse',
          target: 'test_resourse',
        }]
      }
    );
  }

  Drupal.tableDrag['test_table_id'].toggleColumns();
  Drupal.tableDrag['test_table_id'].hideColumns();
  Drupal.tableDrag['test_table_id'].showColumns();
  Drupal.tableDrag['test_table_id'].restripeTable();
  Drupal.tableDrag['test_table_id'].displayColumns(false);
  Drupal.tableDrag['test_table_id'].addColspanClass(0);

  const testRow = document.getElementById('test_table_row');
  if (testTableDrag && testRow) {
    const testRowObject = new Drupal.tableDrag['test_table_id'].row(
      testRow,
      '',
      Drupal.tableDrag['test_table_id'].indentEnabled,
      Drupal.tableDrag['test_table_id'].maxDepth,
      true,
    );

    const testRowElement = document.createElement('tr');
    testRowObject.addChangedWarning();
    testRowObject.findChildren(false);
    testRowObject.findChildren(true);
    testRowObject.isValidSwap(testRowElement);
    testRowObject.swap('after', testRowElement);
    testRowObject.swap('before', testRowElement);
    testRowObject.validIndentInterval(testRow, null);
    testRowObject.validIndentInterval(null, testRow);
    testRowObject.indent(100);
    testRowObject.findSiblings(testTableDrag.rowSettings('test_drag_id', testRowElement));
    testRowObject.removeIndentClasses();
    testRowObject.markChanged();
  }

  Drupal.theme('tableDragChangedMarker');
  Drupal.theme('tableDragIndentation');
  Drupal.theme('tableDragChangedWarning');
  Drupal.theme('tableDragToggle');
  Drupal.theme('toggleButtonContent', true);
  Drupal.theme('toggleButtonContent', false);
  Drupal.theme('tableDragHandle');
  Drupal.theme('tableDragHandle', 'drag');
  Drupal.theme('tableDragHandle', 'drag-y');

})(drupalSettings, Drupal)
