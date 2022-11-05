// B - Toll Gates
// https://atcoder.jp/contests/abc094/tasks/abc094_b
// 2022-10-11T00:15:15.802Z

import { ranges } from "tstl";

export function main(input: string): number | string {
  const [N, M, X, ...A] = input.split(/\s/).map(Number);
  const idx = ranges.lower_bound(A, X).index();
  return Math.min(idx, M - idx);
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()) + "");
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.each([
    ["5 3 3\n1 2 4", "1"],
    ["7 3 2\n4 5 6", "0"],
    ["10 7 5\n1 2 3 4 6 8 9", "3"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
