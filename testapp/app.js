'use strict';

console.log('I\'m starting fresh');

const r = require('rethinkdbdash')({
  servers: [{
    host: 'rethinkdb1',
    port: 28015
  }, {
    host: 'rethinkdb2',
    port: 28015
  }, {
    host: 'rethinkdb3',
    port: 28015
  }, {
    host: 'rethinkdb4',
    port: 28015
  }, {
    host: 'rethinkdb5',
    port: 28015
  }],
  timeout: 5000
});

setInterval(() => {
  r.db('clustertest').table('importantData')
    .then(result => {
      console.log('read', result);
    });
}, 10000);
