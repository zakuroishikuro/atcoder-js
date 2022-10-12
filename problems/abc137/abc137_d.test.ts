// D - Summer Vacation
// https://atcoder.jp/contests/abc137/tasks/abc137_d
// 2022-10-10T15:05:30.630Z

import { PriorityQueue } from "tstl";

export function main(input: string) {
  const [[N, M], ...jobs] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));

  const schedule = [...Array(M + 1)].map(() => []);
  for (const [days, salary] of jobs) {
    if (days <= M) {
      schedule[days].push(salary);
    }
  }

  const heap = new PriorityQueue<number>();

  let max = 0;
  for (const salaries of schedule) {
    for (const salary of salaries) {
      heap.push(salary);
    }

    if (heap.size() > 0) {
      max += heap.top();
      heap.pop();
    }
  }

  return max;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3 4\n4 3\n4 1\n2 2", "5"],
    ["5 3\n1 2\n1 3\n1 4\n2 1\n2 3", "10"],
    ["1 1\n2 1", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
