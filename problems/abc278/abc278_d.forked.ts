// D - All Assign Point Add
// https://atcoder.jp/contests/abc278/tasks/abc278_d
// 2022-11-19T12:35:05.551Z

export function main(input: string): number | string {
  const [[N], A, Q, ...queries] = input.split(/\n/).map((r) => r.split(/\s/).map(BigInt));

  const result: bigint[] = [];
  let defaultValue: bigint;
  let nums: { [k: string]: bigint } = {};

  const addAll = (x: bigint) => {
    defaultValue = x;
    nums = {};
  };
  const add = (i: number, x: bigint) => {
    let value: bigint;
    if (nums[i] != undefined) {
      value = nums[i];
    } else if (defaultValue == undefined) {
      value = A[i];
    } else {
      value = defaultValue;
    }
    nums[i] = value + x;
  };
  const print = (i: number) => {
    let value: bigint;
    if (nums[i] != undefined) {
      value = nums[i];
    } else if (defaultValue == undefined) {
      value = A[i];
    } else {
      value = defaultValue;
    }
    result.push(value);
  };

  for (const [q, n, m] of queries) {
    if (q === 1n) {
      addAll(n);
    } else if (q === 2n) {
      const i = Number(n) - 1;
      add(i, m);
    } else if (q === 3n) {
      const i = Number(n) - 1;
      print(i);
    }
  }
  return result.join("\n");
}

if (process.env.NODE_ENV !== "test") console.log(main(require("fs").readFileSync(0, "utf8").trim()));

// テスト
if (process.env.NODE_ENV === "test") {
  [
    ["5\n3 1 4 1 5\n6\n3 2\n2 3 4\n3 3\n1 1\n2 3 4\n3 3", "1\n8\n5"],
    ["1\n1000000000\n8\n2 1 1000000000\n2 1 1000000000\n2 1 1000000000\n2 1 1000000000\n2 1 1000000000\n2 1 1000000000\n2 1 1000000000\n3 1", "8000000000"],
    ["10\n1 8 4 15 7 5 7 5 8 0\n20\n2 7 0\n3 7\n3 8\n1 7\n3 3\n2 4 4\n2 4 9\n2 10 5\n1 10\n2 4 2\n1 10\n2 3 1\n2 8 11\n2 3 14\n2 1 9\n3 8\n3 8\n3 1\n2 6 5\n3 7", "7\n5\n7\n21\n21\n19\n10"],
  ].forEach(([input, e], i) => {
    const a = main(input).toString();
    const failed = a !== e;
    console.log(`example #${i}: `, failed ? "failed !" : "success !");
    if (failed) console.error(JSON.stringify({ input, e, a }, null, "  "));
  });
}
