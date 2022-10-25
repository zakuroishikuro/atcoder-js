// A - Last Letter
// https://atcoder.jp/contests/abc244/tasks/abc244_a
// 2022-10-25T14:48:55.338Z

export function main(input: string) {
  const [N, S] = input.split(/\s/);
  return S[+N - 1];
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["5\nabcde", "e"],
    ["1\na", "a"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
