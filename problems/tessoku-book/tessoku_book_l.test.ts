// A12 - Printer
// https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_l
// 2022-10-04T12:25:08.372Z

const calcItems = (n: bigint, itemsPerSec: bigint[]) => {
  if (n < 0) return 0;
  const items = itemsPerSec.map((p: bigint) => n / p);
  return items.reduce((a, b) => a + b, 0n);
};

const middle = (size: bigint) => size >> 1n;

export function main(input: string) {
  const [_n, k, ...nums] = input.split(/\s/).map(BigInt);

  let first = 0n;
  let last = BigInt(Number.MAX_SAFE_INTEGER); // ここ無駄にデカくしなければ別にBigIntにする必要なかったけどまぁいいや

  while (first < last) {
    const size = last - first;
    const mid = first + middle(size);
    const items = calcItems(mid, nums);

    if (items < k) {
      first = mid + 1n;
    } else {
      last = mid;
    }
  }

  return Number(first);
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([["4 10\n1 2 3 4", "6"]])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });

  /*
  test("calcItems", () => {
    expect(calcItems(0, [1])).toBe(0);
    expect(calcItems(1, [1])).toBe(1);
    expect(calcItems(2, [1])).toBe(2);
    expect(calcItems(3, [1])).toBe(3);
    expect(calcItems(4, [1])).toBe(4);
    expect(calcItems(1, [1, 1])).toBe(2);
    expect(calcItems(1, [1, 1, 1])).toBe(3);
    expect(calcItems(1, [1, 1, 1, 1])).toBe(4);

    const f = Math.floor;
    expect(calcItems(5, [1, 2, 3, 4])).toBe(f(5 / 1) + f(5 / 2) + f(5 / 3) + f(5 / 4));
  });
  test("middle", () => {
    expect(middle(0)).toBe(0);
    expect(middle(1)).toBe(0);
    expect(middle(2)).toBe(1);
    expect(middle(3)).toBe(1);
    expect(middle(4)).toBe(2);
    expect(middle(5)).toBe(2);
    expect(middle(6)).toBe(3);
  });
  */
}
