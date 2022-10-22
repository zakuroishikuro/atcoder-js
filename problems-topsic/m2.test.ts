// /*subject*/
// /*url*/
// /*timestamp*/

export function main(input: string) {
  const exp = input.split(/=/);
  const ans = exp.map(e=>eval(e));
  return ans.every(a=>a == ans[0]) ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    [
      `6
    1 + 2 + 3 = 1 + 5 = 3 + 3`,
      "Yes",
    ],
    [
      `14
      1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 10 + 10 + 10 + 10 + 10 = 50`,
      "No",
    ],
    [
      `4
      1 = 1 = 1 = 1 = 1`,
      "Yes",
    ],
    [
      `1
      1 = 2`,
      "No",
    ],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
