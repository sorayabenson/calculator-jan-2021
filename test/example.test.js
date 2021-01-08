// IMPORT MODULES under test here:

import { additionResult, subtractionResult, multiplicationResult, divisionResult } from '../utils.js';

const test = QUnit.test;

test('it should return 13 when provided with 6 and 7', (expect) => {
    const expected = 13;

    const actual = additionResult(6, 7);

    expect.equal(actual, expected);
})

test('it should return -16 when provided with -20 and 4', (expect) => {
    const expected = -16;

    const actual = additionResult(-20, 4);

    expect.equal(actual, expected);
})

test('it should return 30 when provided with 50 and 20', (expect) => {
    const expected = 30;

    const actual = subtractionResult(50, 20);

    expect.equal(actual, expected);
})

test('it should return -63 when provided with 13 and 76', (expect) => {
    const expected = -63;

    const actual = subtractionResult(13, 76);

    expect.equal(actual, expected);
})

test('it should return 65 when provided with 5 and 13', (expect) => {
    const expected = 65;

    const actual = multiplicationResult(5, 13);

    expect.equal(actual, expected);
})

test('it should return 324 when provided with 9 and 36', (expect) => {
    const expected = 324;

    const actual = multiplicationResult(9, 36);

    expect.equal(actual, expected);
})

test('it should return 2.8 when provided with 14 and 5', (expect) => {
    const expected = 2.8;

    const actual = divisionResult(14, 5);

    expect.equal(actual, expected);
})

test('it should return 16 when provided with 256 and 16', (expect) => {
    const expected = 16;

    const actual = divisionResult(256, 16);

    expect.equal(actual, expected);
})