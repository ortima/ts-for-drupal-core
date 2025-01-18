/// <reference path="./index.d.ts" />
/// <reference path="./drupal.tests.d.ts" />

(
  (Drupal, drupalSettings) => {
    const { suppressDeprecationErrors } = drupalSettings;
    const testElement = Drupal.theme('testFunc', '1', 2);

    Drupal.throwError('Test');
    Drupal.throwError(new Error('Error object testing'));
    
    Drupal.behaviors.default = {
      attach: (context, settings) => {
    
      },
      detach: (context, settings, trigger = 'unload') => {
    
      },
    }
    
    Drupal.behaviors.default2 = {
      attach: (context, settings) => {
    
      }
    }
    
    Drupal.behaviors.default3 = {
      attach: (context) => {
    
      },
      detach: (context) => {
        
      }
    }
    
    Drupal.behaviors.propstest = {
      attach: (context, settings) => {
    
      },
      detach: (context, settings,  trigger = 'move') => {
    
      },
      prop1: 10,
      prop2: 'Text',
      prop3(arg1, arg2) {
        return 0;
      },
    }
    
    Drupal.attachBehaviors();
    Drupal.detachBehaviors();
    Drupal.attachBehaviors(document, drupalSettings);
    Drupal.detachBehaviors(document, drupalSettings, 'move');
    
    Drupal.checkPlain('Text');
    Drupal.formatString(
      '!text @text %text',
      {
        '!text' : 'TEXT',
        '@text' : 'TEXT',
        '%text' : 'TEXT',
      }
    );
    
    Drupal.t('Text');
    Drupal.t(
      '!text @text %text',
      {
        '!text' : 'TEXT',
        '@text' : 'TEXT',
        '%text' : 'TEXT',
      },
      {
        context: 'test',
      }
    );
    
    Drupal.url('/test?param=test#test');
    Drupal.url.toAbsolute('/test?param=test#test');
    Drupal.url.isLocal('/test?param=test#test');
    
    Drupal.formatPlural(0, 'singular', 'plural !text');
    Drupal.formatPlural(
      1,
      'singular',
      'plural !text',
      {
        '!text' : 'TEXT',
        '@text' : 'TEXT',
        '%text' : 'TEXT',
      },
      {
        context: 'test',
      }
    );
    Drupal.encodePath('/test?param=test#test');
    Drupal.deprecationError({message: 'Deprecation message test'});
    Drupal.deprecatedProperty(
      {
        target: {
          'a': 1,
          'b': false,
        },
        deprecatedProperty: 'b',
        message: 'Deprecation message test',
      }
    );
    Drupal.theme('placeholder', 'TEXT');
    
    // Custom theme testing.
    Drupal.theme.testFunc = (arg1, arg2) => {
      return document.createElement('div');
    }

    Drupal.elementIsVisible(testElement);
    Drupal.elementIsHidden(testElement);
  }
)(Drupal, drupalSettings)
