// A55 - Set
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_bc
// 2022-10-31T14:42:32.895Z

import { TreeSet } from "tstl";

export function main(input: string) {
  const ans: number[] = [];

  const set = new TreeSet<number>();
  for (const line of input.split(/\n/).slice(1)) {
    const [q, value] = line.split(/\s/).map(Number);
    if (q == 1) {
      set.insert(value);
    } else if (q == 2) {
      set.erase(value);
    } else if (q == 3) {
      const itr = set.lower_bound(value);
      const min = itr == set.end() ? -1 : itr.value;
      ans.push(min);
    }
  }
  return ans.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["3\n1 77\n3 40\n3 80", "77\n-1"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
