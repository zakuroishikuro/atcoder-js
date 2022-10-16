// A - World Cup
// https://atcoder.jp/contests/abc262/tasks/abc262_a
// 2022-10-16T12:46:53.021Z

export function main(input: string) {
  return Math.ceil(+input / 4) * 4;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.skip.each([
    ["2022","2022"],["2023","2026"],["3000","3002"]
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
