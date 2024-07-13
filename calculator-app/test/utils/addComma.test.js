import { describe, expect, test } from "vitest";
import addComma from "../../src/utils/addComma";

describe.concurrent("Testing addComma function", () => {
  // using test.each() for multiple cases
  test.each([
    ["55000", "55,000"],
    ["100.100", "100.100"],
    ["550", "550"],
    ["100000+10000", "100,000+10,000"],
  ])(`Test %#: addComma("%s")`, (input, expected) => {
    expect(addComma(input)).toBe(expected);
  });

  // test for non-string input
  test("test 4 : addComma(1000) must throw an error", () => {
    expect(() => addComma(1000)).toThrowError();
  });
});

// describe.concurrent("Testing addComma function", () => {
// test("test 1 : add comma in 55000", () => {
//   expect(addComma("55000")).toBe("55,000");
// });
// test("test 2 : add comma in 100.100", () => {
//   expect(addComma("100.100")).toBe("100.100");
// });
// test("test 3 : add comma in 550", () => {
//   expect(addComma("550")).toBe("550");
// });
// test("test 4 : Error => value must be a string", () => {
//   expect(() => addComma(1000)).toThrowError();
// });
// if addComma() return error string on error then use following
// test("test 4", () => {
//   expect(addComma(1000)).toBe("value must be string");
// });
// test("test 5 : '100000+10000' return '100,000+10,000'", () => {
//   expect(addComma("100000+10000")).toBe("100,000+10,000");
// });
// });
