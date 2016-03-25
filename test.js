'use strict';
const test = require('ava');
const fn = require('./lib/index');
const shortcutUrl = require('shortcut-url');
const fs = require('fs');

test.cb('main', function(t) {
  t.plan(2);

  let url = 'http://google.ch';
  let shortcut = fn(url);
  let name = __dirname + 'out.' + shortcut.ext;
  fs.writeFileSync(name, shortcut.value, 'utf8');

  shortcutUrl(name, function(err, read) {
    t.true(!err);
    t.true(url === read);
    t.end();
  });
});
