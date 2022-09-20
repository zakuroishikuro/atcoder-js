const Koa = require('koa');
const koaBody = require('koa-body');
const { createTemplate } = require('./new.js');
const { exec } = require('child_process');

const app = new Koa();
app.use(koaBody());
app.use(async ctx => {
  const req = ctx.request;
  if (req.method == 'POST' && req.header.origin == 'https://atcoder.jp') {
    const problemData = JSON.parse(req.body);
    const file = createTemplate(problemData);

    exec(`code ${file}`);
    console.log(`  * [${problemData.contestId}] ${problemData.subject}`);
  }

  ctx.body = 'OK';
});

app.listen(37564);
