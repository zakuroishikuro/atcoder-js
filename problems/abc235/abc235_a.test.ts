// A - Rotate
// https://atcoder.jp/contests/abc235/tasks/abc235_a
// 2022-11-04T14:27:24.553Z

export function main(input: string) {
  const [a, b, c] = input;
  return +(a + b + c) + +(b + c + a) + +(c + a + b);
}

if (require.main == module) {
  if (!process.argv.includes("f")) {
    require("child_process").fork(__filename, ["f"], { execArgv: ["--stack-size=99900"] });
  } else {
    console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());
  }
}

if (process.env.NODE_ENV == "test") {
  test.each([
    ["123", "666"],
    ["999", "2997"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
