/**
 * 主题管理脚本
 * 功能：
 * 1. 初始化主题（从本地存储或系统偏好）
 * 2. 应用主题类到 HTML 根元素
 * 3. 处理主题切换事件
 */

// 第1步：初始化主题
// 优先级：本地存储 > 系统偏好 > 默认浅色模式
function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // 确定初始主题
    let theme = "light";
    if (savedTheme && ["light", "dark"].includes(savedTheme)) {
        theme = savedTheme;
    } else if (prefersDark) {
        theme = "dark";
    }
    
    // 应用主题到 HTML 根元素
    applyTheme(theme);
    
    // 保存到本地存储
    localStorage.setItem("theme", theme);
}

// 第2步：应用主题到根元素
function applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === "dark") {
        // 应用深色主题（紫蓝-米色渐变）
        html.classList.add("dark");
        html.classList.remove("light");
    } else {
        // 应用浅色主题（白色背景）
        html.classList.add("light");
        html.classList.remove("dark");
    }
}

// 第3步：处理主题切换
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";
    
    // 应用新主题
    applyTheme(newTheme);
    
    // 保存用户选择
    localStorage.setItem("theme", newTheme);
}

// 第4步：绑定主题切换按钮事件
function setupThemeToggle() {
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }
}

// 第5步：监听系统主题变化
function watchSystemTheme() {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeQuery.addEventListener("change", (e) => {
        // 仅在用户未手动设置主题时跟随系统变化
        const savedTheme = localStorage.getItem("theme");
        if (!savedTheme) {
            applyTheme(e.matches ? "dark" : "light");
        }
    });
}

// 初始化执行
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        initializeTheme();
        setupThemeToggle();
        watchSystemTheme();
    });
} else {
    // DOM 已加载
    initializeTheme();
    setupThemeToggle();
    watchSystemTheme();
}
