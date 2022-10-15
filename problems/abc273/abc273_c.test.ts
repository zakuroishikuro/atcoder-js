// C - (K+1)-th Largest Number
// https://atcoder.jp/contests/abc273/tasks/abc273_c
// 2022-10-15T12:33:06.719Z

// むり

import { upper_bound, Vector } from "tstl";

export function main(input: string) {
  const [N, ...A] = input.split(/\s/).map(Number);

  const a = new Vector([...new Set(A)].sort((a, b) => a - b));
  const len = a.size();

  const ans = A.map((n) => {
    let cnt = 0;
    for (let i = 0; i < N; i++) {
      const idx = upper_bound(a.begin(), a.end(), n).index();
      if (len - idx == n) cnt++;
    }

    return cnt;
  });

  console.log(ans);

  return ans.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["6\n2 7 1 8 2 8", "2\n1\n2\n1\n0\n0"],
    ["1\n1", "1"],
    ["10\n979861204 57882493 979861204 447672230 644706927 710511029 763027379 710511029 447672230 136397527", "2\n1\n2\n1\n2\n1\n1\n0\n0\n0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
