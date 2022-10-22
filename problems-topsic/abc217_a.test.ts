// /*subject*/
// /*url*/
// /*timestamp*/

export function main(input: string) {
  const [S, T] = input.split(/\s/);
  return S <= T ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["abc atcoder", "Yes"],
    [`arc agc`, "No"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
