/// <reference path="./index.d.ts" />

jQuery('.test-form1').drupalSetSummary('Test');
jQuery('.test-form2').drupalSetSummary((context) => {
  return context.nodeName;
});

const test = jQuery('.test-form1').drupalGetSummary();