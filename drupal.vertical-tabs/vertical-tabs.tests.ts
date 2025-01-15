/// <reference path="./index.d.ts" />

((Drupal, drupalSettings, $) => {
  const { widthBreakpoint } = drupalSettings;

  const testTheme = Drupal.theme('verticalTab', {title: 'Theme test'});

  Drupal.verticalTab.prototype.focus = function () {
    if (typeof this.summary === 'string') {
      
    }
  }

  const testVerticalTab = new Drupal.verticalTab({title: '', details: $('#test-vertical')});
  const {details, item, link, summary, title} = testVerticalTab;
  testVerticalTab.focus();
  testVerticalTab.tabHide();
  testVerticalTab.tabShow();
  testVerticalTab.updateSummary()

})(Drupal, drupalSettings, jQuery)