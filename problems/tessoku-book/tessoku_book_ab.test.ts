// A28 - Blackboard
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_ab
// 2022-10-08T06:26:41.691Z

export function main(input: string) {
  const [[_N], ...T] = input.split(/\n/).map((r) => {
    const [o, n] = r.split(/\s/);
    return [o, +n];
  });

  let n = 0;
  return T.map(([operator, operand]) => {
    switch (operator) {
      case "+":
        n += +operand;
        break;
      case "-":
        n -= +operand;
        break;
      case "*":
        n *= +operand;
        break;
    }
    n += 10000;
    n %= 10000;
    return n;
  }).join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["4\n+ 57\n+ 43\n* 100\n- 1", "57\n100\n0\n9999"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
