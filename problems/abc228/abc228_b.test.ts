// B - Takahashi's Secret
// https://atcoder.jp/contests/abc228/tasks/abc228_b
// 2022-11-02T13:35:04.518Z

import { Queue } from "tstl";

export function main(input: string) {
  const [N, X, ...A] = input.split(/\s/).map(Number);

  // 再帰dfsでやったらREになった。たぶんスタックの限界
  const visited = new Set<number>();
  const stack: number[] = [];
  stack.push(X);
  while (stack.length > 0) {
    const p = stack.pop();
    visited.add(p);
    const friend = A[p - 1];
    if (!visited.has(friend)) {
      stack.push(friend);
    }
  }

  return visited.size;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["4 2\n3 1 1 2", "3"],
    ["20 12\n7 11 10 1 7 20 14 2 17 3 2 5 19 20 8 14 18 2 10 10", "7"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
