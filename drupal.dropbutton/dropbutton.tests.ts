/// <reference path="./index.d.ts" />

(
  Drupal => {
    const button = Drupal.DropButton.dropbuttons[100]
    const { 
      $actions,
      $dropbutton,
      $list,
      close,
      focusIn,
      focusOut,
      hoverIn,
      hoverOut,
      open,
      toggle,
      timerID,
     } = button;
  }
)(Drupal)