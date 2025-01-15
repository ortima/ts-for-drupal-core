/// <reference path="./index.d.ts" />
/// <reference path="./ajax.test.d.ts" />

((Drupal, drupalSettings, $) => {
  const {ajaxPageState, ajaxTrustedUrl, } = drupalSettings
  const {libraries, theme, theme_token} = ajaxPageState;

  Drupal.theme('ajaxProgressBar', $('#test'));
  Drupal.theme('ajaxProgressIndicatorFullscreen');
  Drupal.theme('ajaxProgressMessage', 'Test message');
  Drupal.theme('ajaxProgressThrobber', 'Test message2');

  // Deprecated themes.
  Drupal.theme('ajaxWrapperMultipleRootElements', $('#test2'));

  const testXHR = new XMLHttpRequest(); 
  new Drupal.AjaxError(testXHR, Drupal.url('/test'));
  new Drupal.AjaxError(testXHR, Drupal.url('/test'), 'Test Ajax Error.');

  const testJQAjax = $.ajax();
  new Drupal.AjaxError(testJQAjax, Drupal.url('/test'));
  new Drupal.AjaxError(testJQAjax, Drupal.url('/test'), 'Test Ajax Error.');

  Drupal.ajax.bindAjaxLinks(document.body);
  Drupal.ajax.instances.filter(
    (instance) => {
      if (instance?.instanceIndex) {
        
      }
    }
  )

  const testDrupalAjax = Drupal.ajax({url: '/test'});
  testDrupalAjax.execute();

  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {
    ;
  }

  Drupal.Ajax.prototype.beforeSend = function(xmlhttprequest, options) {
    const {  } = options;
  }

  Drupal.AjaxCommands.prototype.testCommand = function (ajax, response, status) {
    ajax.getEffect(response);
    ajax.success([response], 'success');
    const {arg1, arg2} = response;
    if (typeof arg1 === 'string') {
      console.log('Test', arg1);
    }
    ajax.commands.invoke(ajax, {
      command: 'invoke',
      selector: '.test',
      method: 'width',
      args: ['hoge', 'bar']
    }, status);

    let testCommand2Response = {
      arg1,
      arg2,
      command: 'testCommand2' as const,
    }
    const testCommand2Result = ajax.commands.testCommand2(ajax, testCommand2Response, status);
    if (testCommand2Result === 'True') {
      Drupal.theme('ajaxWrapperNewContent', $('div'), ajax, response);
    }
  }

  Drupal.AjaxCommands.prototype.testCommand2 = function (ajax, response, status) {
    ajax.getEffect(response);
    const {arg1, arg2} = response;
    return arg2 ? 'True' : 'False';
  }
})(Drupal, drupalSettings, jQuery);