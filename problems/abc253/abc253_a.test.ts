// A - Median?
// https://atcoder.jp/contests/abc253/tasks/abc253_a
// 2022-10-26T14:05:07.271Z

export function main(input: string) {
  const nums = input.split(/\s/).map(Number);
  return nums[1] == nums.sort((a, b) => a - b)[1] ? "Yes" : "No";
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["5 3 2", "Yes"],
    ["2 5 3", "No"],
    ["100 100 100", "Yes"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
