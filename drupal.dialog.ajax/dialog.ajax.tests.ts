/// <reference path="./index.d.ts" />

(
  (Drupal, $) => {
    Drupal.behaviors.dialog.prepareDialogButtons($('.test'));

    const testAjaxObject = Drupal.ajax({url: Drupal.url('./test')});
    const {openDialog, closeDialog, setDialogOption} = testAjaxObject.commands;
  }
)(Drupal, jQuery)
