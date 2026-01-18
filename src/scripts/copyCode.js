/**
 * 为代码块添加复制按钮（幂等、安全、Astro 友好）
 */
function initializeCopyButtons() {
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((pre) => {
        // 已初始化则跳过（核心幂等点）
        if (pre.dataset.copyReady === "true") return;
        pre.dataset.copyReady = "true";

        // 确保定位上下文
        if (!pre.style.position) {
            pre.style.position = "relative";
        }

        // 创建按钮
        const button = document.createElement("button");
        button.type = "button";
        button.className = "copy-code-button";
        button.setAttribute("aria-label", "复制代码");
        button.innerHTML = `
      <svg class="copy-icon" width="16" height="16" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2">
        <rect x="9" y="9" width="13" height="13" rx="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4
                 a2 2 0 0 1 2-2h9
                 a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span class="copy-text">复制</span>
    `;

        pre.appendChild(button);

        button.addEventListener("click", async () => {
            try {
                const code = pre.querySelector("code")?.textContent?.trim();
                if (!code) return;

                await navigator.clipboard.writeText(code);

                const original = button.innerHTML;
                button.classList.add("copied");
                button.innerHTML = `
          <svg class="check-icon" width="16" height="16" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span class="copy-text">已复制</span>
        `;

                setTimeout(() => {
                    button.classList.remove("copied");
                    button.innerHTML = original;
                }, 2000);
            } catch (err) {
                const original = button.innerHTML;
                button.classList.add("error");
                button.innerHTML = `
          <svg class="error-icon" width="16" height="16" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
          <span class="copy-text">失败</span>
        `;

                setTimeout(() => {
                    button.classList.remove("error");
                    button.innerHTML = original;
                }, 2000);
            }
        });
    });
}

/* ---------- 初始化入口（统一） ---------- */

// 首次加载
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeCopyButtons);
} else {
    initializeCopyButtons();
}

// Astro 页面切换
document.addEventListener("astro:page-load", initializeCopyButtons);
