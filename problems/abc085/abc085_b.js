// B - Kagami Mochi
// https://atcoder.jp/contests/abc085/tasks/abc085_b
// 2022-09-23T10:53:46.585Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const mochi = input.split(/\s/).map(Number).slice(1);
  return new Set(mochi).size;
};

const _main = (input = "") => {
  const mochi = input.split(/\s/).map(Number).slice(1);
  const bucket = {};
  for (const m of mochi) {
    if (!(m in bucket)) {
      bucket[m] = 0;
    }
    bucket[m]++;
  }
  return Object.entries(bucket).length;
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["4\n10\n8\n8\n6", "3"],
    ["3\n15\n15\n15", "1"],
    ["7\n50\n30\n50\n100\n50\n80\n30", "4"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
