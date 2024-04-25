'use strict';

const { test } = require('node:test');
const assert = require('node:assert');

test('should run successfully', () => {
    assert.strictEqual(2+2, 4, '2 and 2 should give 4');
});

test('should fail 1', () => {
    assert.strictEqual(2+2, 5, '2 and 3 should give 5');
});

test('should run successfully too', () => {
    assert.strictEqual(1+1, 2, '1 and 1 should give 2');
});

test('should fail 2', () => {
    assert.strictEqual(1+1, 3, '1 and 2 should give 3');
});