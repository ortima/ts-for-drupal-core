/// <reference path="./index.d.ts" />

((Drupal) => {
  const testAjaxObject = Drupal.ajax({url: Drupal.url('./test')});
  
})(Drupal)
