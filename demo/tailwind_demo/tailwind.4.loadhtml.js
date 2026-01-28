async function loadHtml(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`加载${url}失败`);
  return await response.text();
}

async function loadAllContent() {
  try {
    const bodyHeaderHtml = await loadHtml('tailwind.5.body.header.html');
    const bodyBodyHtml   = await loadHtml('tailwind.5.body.body.html');
    const bodyFooterHtml = await loadHtml('tailwind.5.body.footer.html');
    document.body.innerHTML = bodyHeaderHtml + bodyBodyHtml + bodyFooterHtml;
  } catch (err) {
    console.error('加载XML失败：', err);
  }
}




window.addEventListener('load', loadAllContent);

