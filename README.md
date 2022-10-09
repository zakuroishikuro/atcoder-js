# atcoderlet

jestとvitestとjavascriptとtypescriptを混在させてカオスになった
完全自分用

無限にあるAtCoderテスト自動化ツールの車輪の再発名

`pnpm serve`でサーバー立ち上げておいてAtCoderで問題のページ開いてブックマークレット実行するとそのサーバーでpostリクエスト受け取ってVSCodeで問題のテンプレを開く

~~テンプレにそのままテスト書いてるけど、直接実行した場合はテストは走らないようになってるからファイルそのままコピペしちゃって大丈夫~~ だめになった

# インストール

[pnpm](https://pnpm.io/ja/installation) で依存ライブラリをインストール

```sh
pnpm install
```

ブラウザで適当なページをブックマークし、アドレス欄に以下をコピペ (最初の`javascript:`が消されたら手動で付け足す)
名前は`[atcoderlet]`など好きに付ける

```js
javascript:(async()=>{const PORT=37564;const m=/https:\/\/atcoder.jp\/contests\/([-\w]+)\/tasks\/([-\w]+)/.exec(location.href);if(m){const examples=[];const parent=document.querySelector(".lang-ja")||document;parent.querySelectorAll("[id^=pre-sample], ol.linenums").forEach((e,i)=>{let text;if(e.children.length>0){text=[...e.children].map(c=>c.textContent).join("\n")}else{text=e.textContent}(examples[i/2|0]??=[]).push(text.trim())});const problem={url:m[0],contestId:m[1],problemId:m[2],subject:document.title,examples,timestamp:new Date().toISOString()};await fetch(`http://localhost:${PORT}`,{method:"POST",mode:"no-cors",body:JSON.stringify(problem)}).catch(()=>alert(`\u300Cpnpm serve\u300D\u3057\u3066\u306A\u3044\u304B\u3082\uFF1F`))}else{alert("AtCoder\u306E\u554F\u984C\u30DA\u30FC\u30B8\u3067\u4F7F\u3063\u3066\u306D")}})();
```

あとVSCodeもインストールしておく

# 使い方

`pnpm serve`: [問題のページ](https://atcoder.jp/contests/practice/tasks/practice_1)で実行されたブックマークレットからのデータを受け取る
JavaScriptのテンプレが作成されVSCodeで開く

`pnpm test`: problemsフォルダで変更があったファイルがテストされる ([jest --watch](https://jestjs.io/ja/docs/cli#:~:text=name%2Dof%2Dspec-,%E3%82%A6%E3%82%A9%E3%83%83%E3%83%81%E3%83%A2%E3%83%BC%E3%83%89%E3%81%A7%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%3A,-jest%20%2D%2Dwatch%20%23%20%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88))
(Ctrl+zだとVSCodeが自動で開かないので、VSCodeでターミナル追加起動するといいかも？)

`pnpm min`: problems内の最後に保存したファイルをminifyして表示

`pnpm debug 1`: 最終更新ファイルで例題1を実行する。JavaScript Debug Terminalで実行すること

# Node.js のバージョンについて

AtCoderのNode.jsはv12だけどv14からしか動かないライブラリ使ってるので注意
文法的にv18とそこまで変わらないので何とかなる

気になるのはこれらが使えないことぐらい
`Array#at` / `??` / `?.` / `??=`