// /*subject*/
// /*url*/
// /*timestamp*/

export function main(input: string) {
  return input.replace(/^090/, "8190");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["09012345678", "819012345678"],
    ["09000000000", "819000000000"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
