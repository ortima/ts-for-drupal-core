/// <reference path="./index.d.ts" />

(Drupal => {
  const { Message } = Drupal;
  const testElement = Message.defaultWrapper();
  const testType = Message.getMessageTypeLabels();

  Message.announce('Test message 1');
  Message.announce('Test message 2', {announce: 'Test announce 1', type: 'error'});
  Message.announce('Test message 3', {announce: 'Test announce 2', type: 'warning', priority: 'assertive'});

  Message.messageInternalWrapper(document.createElement('div'));
  
  const testMessage = new Message();
  const testMessageId = testMessage.add('Test message 1');
  testMessage.add('Test message 2', {});
  testMessage.add('Test message 3', {announce: 'Test announce 3', id: 'Test ID', priority: 'polite', type: 'warning'});
  
  testMessage.select(testMessageId);
  testMessage.remove(testMessageId);
  testMessage.clear();
  
  const testTheme = Drupal.theme('message', {text: 'Test message theming'}, {type: 'warning', id: 'Test iD'});
})(Drupal);
