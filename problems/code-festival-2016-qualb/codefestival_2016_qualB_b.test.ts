// B - Qualification simulator
// https://atcoder.jp/contests/code-festival-2016-qualb/tasks/codefestival_2016_qualB_b
// 2022-10-09T14:47:32.158Z

export function main(input: string) {
  const data = input.split(/\s/);
  const S = data.pop();
  const [N, A, B] = data.map(Number);

  let cnt = 0;
  let cntF = 0;
  const res = [...S].map((s, i) => {
    let flag = false;
    if (s == "a") {
      flag = cnt < A + B;
    } else if (s == "b") {
      flag = cnt < A + B && cntF < B;
      cntF += Number(flag);
    }
    cnt += Number(flag);
    return flag ? "Yes" : "No";
  });

  return res.join("\n");
}

if (require.main == module) console.log(main(require("fs").readFileSync(0, "utf8").trim()).toString());

if (process.env.NODE_ENV == "test") {
  test.each([
    ["10 2 3\nabccabaabb", "Yes\nYes\nNo\nNo\nYes\nYes\nYes\nNo\nNo\nNo"],
    ["12 5 2\ncabbabaacaba", "No\nYes\nYes\nYes\nYes\nNo\nYes\nYes\nNo\nYes\nNo\nNo"],
    ["5 2 2\nccccc", "No\nNo\nNo\nNo\nNo"],
  ])("example %#", (input, expected) => {
    expect(main(input).toString()).toBe(expected);
  });
}
