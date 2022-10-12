// C - Christmas Eve
// https://atcoder.jp/contests/abc115/tasks/abc115_c
// 2022-09-25T08:50:22.120Z

// むり

export function main(input: string) {
  const [n, k, ...data] = input.split(/\s/).map(Number);
  data.sort((a, b) => b - a);

  let prev = 0;
  const sum = data.map((tree) => {
    const s = tree + prev;
    prev = tree;
    return s;
  });

  return sum;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.skip.each([
    ["5 3\n10\n15\n11\n14\n12", "2"],
    ["5 3\n5\n7\n5\n7\n7", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
