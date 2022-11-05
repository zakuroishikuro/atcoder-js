// C - Previous Permutation
// https://atcoder.jp/contests/abc276/tasks/abc276_c
// 2022-11-05T12:05:55.557Z

import { prev_permutation } from "tstl/ranges/algorithm";

export function main(input: string): number | string {
  const [N, ...P] = input.split(/\s/).map(Number);
  prev_permutation(P);
  return P.join(" ");
}

// ---  ---
if (require.main == module) { // 結果の出力 & 再帰上限突破
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}


if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n3 1 2", "2 3 1"],
    //["10\n9 8 6 5 10 3 1 2 4 7", "9 8 6 5 10 2 7 4 3 1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
