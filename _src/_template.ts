// /*subject*/
// /*url*/
// /*timestamp*/

export function main(input: string) {
  const [A, B] = input.split(/\s/).map(Number);
  //const [[_N, _K], ...data] = input.split(/\n/).map((r) => r.split(/\s/).map(Number));
  return A;
}

if (require.main == module)
  console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());
else {
  test.each([
    /*examples*/
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
