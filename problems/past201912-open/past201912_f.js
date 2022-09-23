// F - DoubleCamelCase Sort
// https://atcoder.jp/contests/past201912-open/tasks/past201912_f
// 2022-09-23T13:16:03.508Z
//Object.getOwnPropertyNames(Math).forEach((n) => globalThis[n] = Math[n]);

const main = (input = "") => {
  const words = input.match(/[A-Z][a-z]*[A-Z]/g).map((w) => w.toLowerCase())
    .sort().map((w) => w.replace(/^.|.$/g, (c) => c.toUpperCase())).join("");
  return words;
};

if (process.env.NODE_ENV != "test") {
  console.log(main(require("fs").readFileSync(0, "utf8").trim()));
} else {
  test("stub", () => {
    expect().toBe();
  });

  [
    ["FisHDoGCaTAAAaAAbCAC", "AAAaAAbCACCaTDoGFisH"],
    ["AAAAAjhfgaBCsahdfakGZsZGdEAA", "AAAAAAAjhfgaBCsahdfakGGdEZsZ"],
  ].forEach(([input, output], i) => {
    test(`example #${i + 1}`, () => {
      expect(`${main(input)}`).toBe(output);
    });
  });
}
