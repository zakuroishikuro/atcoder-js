// C - Otoshidama
// https://atcoder.jp/contests/abc085/tasks/abc085_c
// 2022-09-23T07:27:37.423Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

export function main(input: string) {
  const [bills, yen] = input.split(/\s/).map(Number);

  for (let i = 0; i <= bills; i++) {
    for (let j = 0; j <= bills - i; j++) {
      const k = bills - i - j;
      if (i * 10000 + j * 5000 + k * 1000 == yen) return `${i} ${j} ${k}`;
    }
  }

  return "-1 -1 -1";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["9 45000", "4 0 5"],
    ["20 196000", "-1 -1 -1"],
    ["1000 1234000", "14 27 959"],
    ["2000 20000000", "2000 0 0"],
  ])("example %#", (input, expected) => {
    const yen = +input.trim().split(/\s+/)[1];

    const actual = main(input);
    const [a, b, c] = actual.split(/\s+/).map(Number);
    const actualYen = a * 10000 + b * 5000 + c * 1000;
    if (actual === "-1 -1 -1") {
      expect(actual).toBe(expected);
    } else {
      expect(actualYen).toBe(yen);
    }
  });
}
