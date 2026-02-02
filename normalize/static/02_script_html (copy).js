async function loadHtml(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`加载${url}失败`);
  return await response.text();
}

async function loadAllContent() {
  try {
    const bodyHtml = await loadHtml('static/01_body.html');
    document.body.innerHTML = bodyHtml;

    const mapHtml = await loadHtml('static/01_map_mos.html');
    const mosTd = document.getElementById('mos');
    if (mosTd) {
      mosTd.innerHTML = mapHtml;
      //if (mosTd.querySelector('#map_mos')) initMap('map_mos'); // 假设initMap接收地图容器ID


      // await _start();
    } else {
      console.warn('未找到id="mos"的td元素');
    }
  } catch (err) {
    console.error('加载XML失败：', err);
  }
}




window.addEventListener('load', loadAllContent);

