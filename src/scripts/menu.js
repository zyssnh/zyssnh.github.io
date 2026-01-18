function initMenu() {
  const button = document.getElementById("menu-button");
  const panel = document.getElementById("menu-panel");

  if (!button || !panel) return;

  // 防止 astro:page-load 重复绑定
  if (button.dataset.ready === "true") return;
  button.dataset.ready = "true";

  const open = () => {
    button.setAttribute("aria-expanded", "true");
    panel.classList.remove("hidden");
  };

  const close = () => {
    button.setAttribute("aria-expanded", "false");
    panel.classList.add("hidden");
  };

  const toggle = () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    expanded ? close() : open();
  };

  // 点击按钮
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });

  // 点击菜单内部不关闭
  panel.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // 点击外部关闭
  document.addEventListener("click", close);

  // Esc 键关闭
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      close();
      button.focus();
    }
  });

  // 点击链接后关闭（UX）
  panel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", close);
  });
}

// 初始加载
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMenu);
} else {
  initMenu();
}

// Astro 页面切换
document.addEventListener("astro:page-load", initMenu);
