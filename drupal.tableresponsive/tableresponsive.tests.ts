/// <reference path="./index.d.ts" />

(
  (Drupal) => {

    Drupal.behaviors.testBehavior = {
      attach: (context) => {
        const tables = context.querySelectorAll('table');
        tables.forEach(testTable => {
          const responsiveTable = new Drupal.TableResponsive(testTable)
          const { table, $table, hideText, showText, $headers, $link } = responsiveTable
        });
      } 
    }

    if (Array.isArray(Drupal.TableResponsive.tables)) {
      
    }
  }
)(Drupal)