// B - Do you know the second highest mountain?
// https://atcoder.jp/contests/abc201/tasks/abc201_b
// 2022-09-27T13:03:12.658Z

export function main(input: string) {
  const [[_n], ...mountains] = input.split(/\n/).map((s) => s.split(/\s/));
  mountains.sort((a, b) => +b[1] - +a[1]);
  return mountains[1][0];
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["3\nEverest 8849\nK2 8611\nKangchenjunga 8586", "K2"],
    ["4\nKita 3193\nAino 3189\nFuji 3776\nOkuhotaka 3190", "Kita"],
    ["4\nQCFium 2846\nchokudai 2992\nkyoprofriends 2432\npenguinman 2390", "QCFium"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
