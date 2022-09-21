# atcoderlet

AtCoderのテストを簡単にしたかったツール
ワンタッチで問題のテンプレ作成・Jestでテスト
(今のところJavaScriptで解く人専用)

JavaScriptのテンプレにそのままテスト書いてるけど、直接実行した場合はテストは走らないようになってるのでファイルそのままコピペしちゃって大丈夫

# インストール

[pnpm](https://pnpm.io/ja/installation) で依存ライブラリをインストール

```sh
pnpm install
```

ブラウザで適当なページをブックマークし、アドレス欄に以下をコピペ (最初の`javascript:`が消されたら手動で付け足す)
名前は`[atcoderlet]`など好きに付ける

```js
javascript:(async()=>{const PORT=37564;const m=/https:\/\/atcoder.jp\/contests\/([-\w]+)\/tasks\/([-\w]+)/.exec(location.href);if(m){const examples=[];document.querySelectorAll(".lang-ja [id^=pre-sample]").forEach(((e,i)=>{(examples[i/2|0]??=[]).push(e.textContent.trim())}));const problem={url:m[0],contestId:m[1],problemId:m[2],subject:document.title,examples:examples,timestamp:(new Date).toISOString()};await fetch(`http://localhost:${PORT}`,{method:"POST",mode:"no-cors",body:JSON.stringify(problem)}).catch((()=>alert(`「pnpm serve」してないかも？`)))}else{alert("AtCoderの問題ページで使ってね")}})();
```

あとVSCodeもインストールしておく

# 使い方

`pnpm serve` したあとブラウザで[問題のページ](https://atcoder.jp/contests/practice/tasks/practice_1)を開きブックマークレットを押すだけ
JavaScriptのテンプレが作成されVSCodeで開く

`pnpm test`するとproblemsフォルダで変更があったファイルがテストされる ([jest --watch](https://jestjs.io/ja/docs/cli#:~:text=name%2Dof%2Dspec-,%E3%82%A6%E3%82%A9%E3%83%83%E3%83%81%E3%83%A2%E3%83%BC%E3%83%89%E3%81%A7%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%3A,-jest%20%2D%2Dwatch%20%23%20%E3%83%87%E3%83%95%E3%82%A9%E3%83%AB%E3%83%88))
(Ctrl+zだとVSCodeが自動で開かないので、VSCodeでターミナル追加起動するといいかも？)

# Node.js のバージョンについて

```
# AtcoderにNode.jsのバージョンを合わせる (ほんとはv12.1.6)
pnpm env use --global v12

# 遊び終わったら最新版に戻す
pnpm env use --global latest
```

v12で動くライブラリしか使用してないので安心してv12にできる

ただ、文法的にv18とそこまで変わらないのでわざわざバージョンを合わせなくていいかも
気になるのは以下が使えないことぐらい
`Array#at` / `??` / `?.` / `??=`