// /*subject*/
// /*url*/
// /*timestamp*/

export function main(input: string): number | string {
  const [A, B] = input.split(/\s/).map(Number);
  return input;
}

if (require.main == module) { //ここから読む必要なし
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") { // テスト
  test.each([
    /*examples*/
  ])("example %#", (input, expected) => {
    expect(`${main(input)}`).toBe(expected);
  });
}
