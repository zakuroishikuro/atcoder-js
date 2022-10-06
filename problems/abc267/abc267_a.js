// A - Saturday
// https://atcoder.jp/contests/abc267/tasks/abc267_a
// 2022-09-23T15:09:51.788Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const weekdays = "Monday, Tuesday, Wednesday, Thursday, Friday";
  return 5 - weekdays.split(/,\s*/).indexOf(input);
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["Wednesday", "3"],
    ["Monday", "5"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
