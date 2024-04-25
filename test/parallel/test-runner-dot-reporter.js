'use strict';

const { test } = require('node:test');
const assert = require('node:assert');

test('should run successfully', () => {
    assert.strictEqual(2+2, 4, '2 and 2 should give 4');
});

test('should fail', () => {
    assert.strictEqual(2+2, 5, '2 and 2 should give 4');
});