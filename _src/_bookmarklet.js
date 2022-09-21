javascript: (async () => {
  const PORT = 37564;

  const url = location.href;
  const subject = document.title;

  const m = /https:\/\/atcoder.jp\/contests\/([-\w]+)\/tasks\/([-\w]+)/.exec(url);
  if (m) {
    const [contestId, problemId] = m.slice(1);
    const examples = [];
    document.querySelectorAll('.lang-ja [id^=pre-sample]').forEach((p, i) => {
      if (i % 2 == 0) examples.push([]);
      examples.at(-1).push(p.textContent.trim());
    });

    await fetch(`http://localhost:${PORT}`, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        url,
        subject,
        examples,
        contestId,
        problemId,
      }),
    }).catch(() => alert(`「pnpm serve」してないかも？`));
  } else {
    alert('AtCoderの問題ページで使ってね');
  }
})();
