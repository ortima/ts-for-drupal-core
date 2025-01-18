/// <reference path="./index.d.ts" />

(Drupal => {
  Drupal.theme('progressBar', 'test-id');
  
  Drupal.ProgressBar.prototype.displayError = function(string) {
    if (typeof this.id === 'string') {

    }
  }

  const testProgressBar = new Drupal.ProgressBar(
    'progressBarTest1'
  );
  
  testProgressBar.setProgress(0, 'Test1');
  testProgressBar.setProgress(100, 'Test2', 'Test');
  
  new Drupal.ProgressBar(
    'progressBarTest2',
    $.noop,
    'GET',
    $.noop()
  )
})(Drupal);
