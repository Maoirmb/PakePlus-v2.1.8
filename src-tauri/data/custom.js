window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// 永久自动去水印（PakePlus 专用，持续运行不停止）
function removeWatermark() {
    // 移除页面所有水印元素（常见水印类名）
    const watermarkSelectors = [
        '.watermark', '#watermark', '.water-mark', '.wm', '.watermark-container',
        '.watermark-bg', '.watermark-mask', '.mask', '.watermark-wrapper',
        '[class*="watermark"]', '[id*="watermark"]', '[style*="watermark"]'
    ];

    // 遍历删除所有水印元素
    watermarkSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.remove());
    });

    // 强制清除 canvas 水印
    document.querySelectorAll('canvas').forEach(canvas => {
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    });
}

// 立即执行一次
removeWatermark();

// 每 300 毫秒自动清理一次（永久循环，水印出来瞬间就删）
setInterval(removeWatermark, 100);

console.log('✅ 自动去水印已永久启动');
// 禁止按键触发模糊
document.addEventListener('keydown', function(e) {
  e.stopImmediatePropagation();
}, true);

document.addEventListener('keyup', function(e) {
  e.stopImmediatePropagation();
}, true);

// 强制清除所有模糊滤镜
document.querySelectorAll('*').forEach(el => {
  el.style.filter = 'none !important';
  el.style.textShadow = 'none !important';
  el.style.opacity = '1 !important';
});

// 持续强制清除模糊（防止网站反复设置）
setInterval(() => {
  document.querySelectorAll('*').forEach(el => {
    el.style.filter = 'none';
  });
}, 50);

console.log('✅ 已禁用按键模糊，页面保持清晰');
                               