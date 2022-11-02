// B - Takahashi's Secret
// https://atcoder.jp/contests/abc228/tasks/abc228_b
// 2022-11-02T13:35:04.518Z

// 同じフォルダに「_testcases」を作り以下をダウンロードして解凍して入れる
// https://www.dropbox.com/sh/nx3tnilzqz7df8a/AAD3faVQHC6ROAPmAXeHdwKJa/abc228/B?dl=0&subfolder_nav_tracking=1

import fs from "fs";
const d = `${__dirname}/_testcases`;
const inputs = fs.readdirSync(`${d}/in`).map((f) => fs.readFileSync(`${d}/in/${f}`, "utf8").trim());
const outputs = fs.readdirSync(`${d}/out`).map((f) => fs.readFileSync(`${d}/out/${f}`, "utf8").trim());
const testcases = inputs.map((input, i) => [input, outputs[i]]);

export function main(input: string) {
  const [N, X, ...A] = input.split(/\s/).map(Number);
 
  const visited = new Set();
 
  function dfs(index: number) {
    visited.add(index);
    const friend = A[index - 1];
    if (!visited.has(friend)) dfs(friend);
  }
 
  dfs(X);
 
  return visited.size;
}

test.each(testcases)("example %#", (input, expected) => {
  expect(main(input).toString()).toBe(expected);
});
