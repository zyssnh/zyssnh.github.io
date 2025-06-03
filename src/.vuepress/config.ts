import {defineUserConfig} from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
    base: "/",

    lang: "zh-CN",
    title: "开始",
    description: "vuepress-theme-hope 的文档演示",

    theme,

    // 和 PWA 一起启用
    // shouldPrefetch: false,
});
