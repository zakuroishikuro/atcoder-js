// A11 - Binary Search 1
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_k
// 2022-10-04T11:51:35.091Z

// にぶたん
const find = (value: number, values: number[]) => {
  let first = 0;
  let last = values.length - 1;
  while (first <= last) {
    const size = last - first + 1;
    const middle = first + ((size - (size & 1)) >> 1);
    if (values[middle] == value) return middle;
    if (values[middle] > value) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }
  return -1;
};

export function main(input: string) {
  const [_n, x, ...nums] = input.split(/\s/).map(Number);
  nums.sort((a, b) => a - b);

  return find(x, nums) + 1;
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["15 47\n11 13 17 19 23 29 31 37 41 43 47 53 59 61 67", "11"],
    ["10 80\n10 20 30 40 50 60 70 80 90 100", "8"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
