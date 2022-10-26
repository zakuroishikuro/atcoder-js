// A - When?
// https://atcoder.jp/contests/abc258/tasks/abc258_a
// 2022-10-26T13:53:03.852Z

export function main(input: string) {
  const K = +input;
  const [h, m] = K < 60 ? [21, K] : [22, K - 60];
  return `${h}:${m.toString().padStart(2, "0")}`;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["63", "22:03"],
    ["45", "21:45"],
    ["100", "22:40"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
