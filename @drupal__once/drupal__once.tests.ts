/// <reference path="./index.d.ts" />

once('testing', 'input');

const tables = once.filter('testTabledrag', 'table');
tables.forEach(
  (table) => console.log(table.tBodies)
);


// jQuery tests.
once('jqueryOnce', jQuery('input'));
once.remove('jqueryOnceRemove', jQuery('input'));
once.filter('jqueryOnceFilter', jQuery('input'));

const testForm = document.querySelector('form#testing');

if (testForm) {
  once('jqueryOnceContext', jQuery('input'), testForm);
  once.remove('jqueryOnceRemoveContext', jQuery('input'), testForm);
  once.filter('jqueryOnceFilterContext', jQuery('input'), testForm);
}