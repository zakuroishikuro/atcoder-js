// A52 - Queue
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_az
// 2022-10-31T14:08:10.467Z

import { Queue } from "tstl";

export function main(input: string) {
  const ans: string[] = [];

  const que = new Queue<string>();
  for (const line of input.split(/\n/).slice(1)) {
    const [q, name] = line.split(/\s/);
    if (q == "1") {
      que.push(name);
    } else if (q == "2") {
      const name = que.front();
      ans.push(name);
    } else if (q == "3") {
      que.pop();
    }
  }
  return ans.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["5\n1 taro\n1 hanako\n2\n3\n2", "taro\nhanako"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
