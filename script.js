    // 创建 XMLHttpRequest 请求读取 XML 文件
function internalFunc(){}
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'body.xml', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // 解析 XML 响应
        const xmlDoc = xhr.responseText;
        console.log(xmlDoc);
        // 获取 XML 中的内容节点
        //const content = xmlDoc.querySelector('content').innerHTML;
        // 将内容插入到主 HTML 的容器中
        //document.getElementById('xml-content-container').innerHTML = content;
      }
    };
    // 发送请求
    xhr.send();
}