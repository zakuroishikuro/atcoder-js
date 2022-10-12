javascript: (async () => {
  const PORT = 37564;

  const m = /https:\/\/atcoder.jp\/contests\/([-\w]+)\/tasks\/([-\w]+)/.exec(
    location.href
  );
  if (m) {
    const examples = [];
    const parent = document.querySelector(".lang-ja") || document;
    parent.querySelectorAll("[id^=pre-sample], ol.linenums").forEach((e, i) => {
      let text;
      if (e.children.length > 0) {
        text = [...e.children].map((c) => c.textContent).join("\n");
      } else {
        text = e.textContent;
      }
      (examples[(i / 2) | 0] ??= []).push(text.trim());
    });

    const problem = {
      url: m[0],
      contestId: m[1],
      problemId: m[2],
      subject: document.title,
      examples,
      timestamp: new Date().toISOString(),
    };

    await fetch(`http://localhost:${PORT}`, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(problem),
    }).catch(() => alert(`「pnpm serve」してないかも？`));
  } else {
    alert("AtCoderの問題ページで使ってね");
  }
})();
