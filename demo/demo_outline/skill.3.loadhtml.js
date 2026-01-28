//let isLoaded = false;
async function loadHtml(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`加载${url}失败`);
  return await response.text();
}

async function loadAllContent() {
  try {
    const bodyHeaderHtml = await loadHtml('skill.4.body.html');
    //const bodyBodyHtml   = await loadHtml('tailwind.5.body.body.html');
    //const bodyFooterHtml = await loadHtml('tailwind.5.body.footer.html');
    document.body.innerHTML = bodyHeaderHtml ;
    //document.body.innerHTML = bodyHeaderHtml + bodyBodyHtml + bodyFooterHtml;

    // ✅ Initialize skill matcher AFTER HTML is injected
    //if (typeof window.initSkillMatcher === 'function') {
    window.initSkillMatcher();
    //}
    
    window.contentLoaded = true;

//    isLoaded = true;
  } catch (err) {
    console.error('加载XML失败：', err);
  }
}




window.addEventListener('load', loadAllContent);

