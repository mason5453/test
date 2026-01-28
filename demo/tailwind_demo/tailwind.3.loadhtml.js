async function loadHtml(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`加载${url}失败`);
  return await response.text();
}

async function loadAllContent() {
  try {
    const bodyHtml = await loadHtml('tailwind.4.body.html');
    document.body.innerHTML = bodyHtml;
  } catch (err) {
    console.error('加载XML失败：', err);
  }
}




window.addEventListener('load', loadAllContent);

