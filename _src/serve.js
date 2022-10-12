const PORT = 37564;
const ORIGINS = ["https://atcoder.jp"];

const Koa = require("koa");
const koaBody = require("koa-body");
const { createTemplate } = require("./createTemplate.js");
const { exec } = require("child_process");

const app = new Koa();
app.use(koaBody());

app.use(async (ctx) => {
  const req = ctx.request;
  if (req.method == "POST" && ORIGINS.includes(req.header.origin)) {
    const problemData = JSON.parse(req.body);
    const file = createTemplate(problemData);

    console.log(
      `  * [${problemData.contestId}] ${problemData.subject} (${file})`
    );

    // VSCode開く (変なの渡されたらやべーけどまぁ変な文字列は置換してるし・・・)
    exec(`code ${file}`);
  }

  ctx.body = "OK";
});

app.listen(PORT);
