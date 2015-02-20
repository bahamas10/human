#!/usr/bin/env node

var assert = require('assert');

var human = require('../');

var rel;

rel = human(600);
assert.equal(rel, '10 minutes ago');

rel = human(new Date());
assert.equal(rel, '0 seconds ago');
