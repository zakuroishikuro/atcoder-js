// B - Postal Code
// https://atcoder.jp/contests/abc084/tasks/abc084_b
// 2022-09-23T04:06:21.521Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const [a, b, s] = input.split(/\s/);
  return new RegExp(`^\\d{${a}}-\\d{${b}}$`).test(s) ? "Yes" : "No";
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    [
      "3 4\n269-6650",
      "Yes",
    ],
    [
      "1 1\n---",
      "No",
    ],
    [
      "1 2\n7444",
      "No",
    ],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
