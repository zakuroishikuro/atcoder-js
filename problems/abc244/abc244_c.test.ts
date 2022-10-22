// C - Yamanote Line Game
// https://atcoder.jp/contests/abc244/tasks/abc244_c
// 2022-10-22T00:22:02.340Z
// tags: interact

import { TreeSet } from "tstl";

export function init() {
  let answers: TreeSet<number>;

  const solve = (input: string) => {
    const n = +input;
    if (!answers) {
      answers = new TreeSet<number>([...Array(n * 2 + 1)].map((_, i) => i + 1));
    } else {
      answers.erase(n);
    }

    if (answers.empty()) {
      return "";
    } else {
      const ans = answers.begin().value;
      answers.erase(ans);
      return ans;
    }
  };

  return {
    solve,
    get finish() {
      return answers && answers.size() == 0;
    },
  };
}

if (require.main == module) {
  (async () => {
    const solver = init();
    for await (const input of process.stdin.setEncoding("utf8")) {
      console.log(solver.solve(input.trim()).toString());
      if (solver.finish) break;
    }
  })();
}

if (process.env.NODE_ENV == "test") {
  const solver = init();

  test.each([
    ["2", "1"],
    ["3", "2"],
    ["4", "5"],
    ["0", ""],
  ])("example %#", (input, expected) => {
    expect(solver.solve(input).toString()).toBe(expected);
  });
}
