import { sieve } from "./prime";

import { test, expect, bench } from "vitest";

test("sieve", () => {
  expect(sieve(7)).toEqual([2, 3, 5, 7])
});