import {defineClientConfig} from "vuepress/client";
import {setupTransparentNavbar} from "vuepress-theme-hope/presets/transparentNavbar.js";
import {setupRunningTimeFooter} from "vuepress-theme-hope/presets/footerRunningTime.js";
import Blog from "./layouts/Blog.vue";

export default defineClientConfig({
    //...
    setup: () => {
        setupTransparentNavbar({type: "homepage"});
        setupRunningTimeFooter(
            new Date("2025-6-1"),
            {
                "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
            },
            true
        );
    },

    layouts: {
        // ...
        Blog,
    },

    // setup() {
    //     setupRunningTimeFooter(
    //         new Date("2025-6-1"),
    //         {
    //             "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
    //         },
    //         true
    //     )
    // }
});