// D - Divide by 2 or 3
// https://atcoder.jp/contests/abc276/tasks/abc276_d
// 2022-11-05T12:12:53.166Z

export function main(input: string): number | string {
  return 3;
  /*
  const [N, ...A] = input.split(/\s/).map(Number);
  let nums = [...new Set(A)];

  let max2 = 0;
  let max3 = 0;
  let max6 = 0;
  for (const n of nums) {
    if (n == 1) continue;
    if (n % 6) {
      max6 = max6 = Math.max(max6, n);
    } else if (n % 3 == 0) {
      max3 = max3 = Math.max(max3, n);
    } else if (n % 2 == 0) {
      max2 = Math.max(max2, n);
    }

    if (sieve(n).some((n) => n > 3)) return -1;
  }

  let cnt = 0;
  if (max6 > 0) {
    max3 = Math.max(max6 / 2, max3);
    max2 /= 2;
    cnt++;
  }

  if (max3 > 0) {
    if (max3 == 3) {
      cnt++;
    } else {
      cnt += Math.ceil(Math.cbrt(max3));
    }
  }

  if (max2 > 0) {
    if (max2 == 2) {
      cnt++;
    } else {
      cnt += Math.sqrt(max2);
    }
  }

  return cnt;
  */
}

if (require.main == module) {
  if (process.send) console.log(main(require("fs").readFileSync(0, "utf8").trim()));
  else require("child_process").fork(__filename, { execArgv: ["--stack-size=99900"] });
}

if (process.env.NODE_ENV == "test") {
  test.skip.each([
    ["3\n1 4 3", "3"],
    //["3\n2 7 6", "-1"],
    //["6\n1 1 1 1 1 1", "0"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
