
    const style = document.createElement('style');
    style.textContent = `
      .circle-image::before {
        background-image: url('lightning.webp?v=${Date.now()}') !important;
      }
    `;
    document.head.appendChild(style);