// A53 - Priority Queue
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_ba
// 2022-10-31T14:22:52.698Z

import { PriorityQueue, greater } from "tstl";

export function main(input: string) {
  const ans = [];

  const pq = new PriorityQueue<number>(greater); // 最小値から取り出す場合はgreaterを渡す
  for (const line of input.split(/\n/).slice(1)) {
    const [q, value] = line.split(/\s/).map(Number);
    if (q == 1) {
      pq.push(value);
    } else if (q == 2) {
      const value = pq.top();
      ans.push(value);
    } else if (q == 3) {
      pq.pop();
    }
  }
  return ans.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["3\n1 2420\n1 1650\n2", "1650"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
