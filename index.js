var argv = require('optimist')
  .usage('$0 -a <action>')
  .demand('action')
  .alias('a', 'action')
  .describe('a', 'Perform an action')
  .argv
;

console.log('aloha');

