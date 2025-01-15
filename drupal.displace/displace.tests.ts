/// <reference path="./index.d.ts" />

(Drupal => {
  const flag = Drupal.behaviors.drupalDisplace.displaceProcessed;
  const { displace } = Drupal;
  displace();
  displace(true);
  displace(false);

  const { left, top, right, bottom } = displace.offsets;

  displace.calculateOffset('left');
})(Drupal);
