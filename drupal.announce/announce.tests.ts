/// <reference path="./index.d.ts" />

(Drupal => {
  Drupal.announce('Test1');
  Drupal.announce('Test2', 'assertive');
})(Drupal);