// F - DoubleCamelCase Sort
// https://atcoder.jp/contests/past201912-open/tasks/past201912_f
// 2022-09-23T13:16:03.508Z

export function main(input: string) {
  const words = input
    .match(/[A-Z][a-z]*[A-Z]/g)
    .map((w) => w.toLowerCase())
    .sort()
    .map((w) => w.replace(/^.|.$/g, (c) => c.toUpperCase()))
    .join("");
  return words;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["FisHDoGCaTAAAaAAbCAC", "AAAaAAbCACCaTDoGFisH"],
    ["AAAAAjhfgaBCsahdfakGZsZGdEAA", "AAAAAAAjhfgaBCsahdfakGGdEZsZ"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
