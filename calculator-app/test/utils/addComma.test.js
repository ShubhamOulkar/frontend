import { describe, expect, test } from "vitest";
import addComma from "../../src/utils/addComma";

describe.concurrent("Testing addComma function", () => {
  test("test 1 : add comma in 55000", () => {
    expect(addComma("55000")).toBe("55,000");
  });

  test("test 2 : add comma in 100.100", () => {
    expect(addComma("100.100")).toBe("100.100");
  });

  test("test 3 : add comma in 550", () => {
    expect(addComma("550")).toBe("550");
  });

  test("test 4 : Error value must be string", () => {
    expect(() => addComma(1000)).toThrowError();
  });

  test("test 5 : '100000+10000' return '100,000+10,000'", () => {
    expect(addComma("100000+10000")).toBe("100,000+10,000");
  });
});
