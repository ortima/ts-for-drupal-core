/// <reference path="./index.d.ts" />

(Drupal => {
  const testFunc1 = () => {}
  Drupal.debounce(testFunc1, 100);
  const testFunc2 = (arg1: string, arg2: number) => false
  Drupal.debounce(testFunc2, 100);
})(Drupal);