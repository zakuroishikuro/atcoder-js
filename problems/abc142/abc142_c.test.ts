// C - Go to School
// https://atcoder.jp/contests/abc142/tasks/abc142_c
// 2022-10-10T14:13:57.605Z

export function main(input: string) {
  const [N, ...A] = input.split(/\s/).map(Number);

  const o = [];
  A.forEach((n, i) => (o[n - 1] = i + 1));

  return o.join(" ");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\n2 3 1", "3 1 2"],
    ["5\n1 2 3 4 5", "1 2 3 4 5"],
    ["8\n8 2 7 3 4 5 6 1", "8 2 4 5 6 7 3 1"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
