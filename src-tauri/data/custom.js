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

// 安全版：仅禁用右键 + 禁用F12，无任何防调试，绝不空白页面
(function() {
    // 禁用右键菜单
    document.oncontextmenu = function(e) {
        return false;
    };

    // 禁用 F12
    document.onkeydown = function(e) {
        // 禁用 F12
        if (e.key === 'F12' || e.keyCode === 123) {
            return false;
        }
        // 禁用 Ctrl+U 查看源码
        if (e.ctrlKey && e.key === 'u') {
            return false;
        }
        // 禁用 Ctrl+Shift+I 打开控制台
        if (e.ctrlKey && e.shiftKey && e.key === 'i') {
            return false;
        }
    };
})();