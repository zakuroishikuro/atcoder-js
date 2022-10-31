// A54 - Map
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_bb
// 2022-10-31T14:35:18.466Z

export function main(input: string) {
  const ans: number[] = [];

  const map: { [k: string]: number } = {};
  for (const line of input.split(/\n/).slice(1)) {
    const [q, name, value] = line.split(/\s/);
    if (q == "1") {
      map[name] = +value;
    } else if (q == "2") {
      const value = map[name];
      ans.push(value);
    }
  }
  return ans.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["3\n1 tanaka 49\n1 suzuki 50\n2 tanaka", "49"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
