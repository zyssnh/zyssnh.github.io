import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    // 系统编程
    "/libs/system-program/c/": "structure",


    // "/libs/system-program/cpp/": "structure",
    "/libs/system-program/cpp/": [
        "",
        {
            text: "语法",
            prefix: "grammar/",
            children: "structure",
        },
        {
            text: "案例",
            prefix: "example/",
            children: "structure",
        }
    ],

    // 网站开发
    "/libs/website-develop/html/": "structure",
    "/libs/website-develop/css/": "structure",
    "/libs/website-develop/javascript/": "structure",
    "/libs/website-develop/python/": "structure",

    // 数据科学
    "/libs/data-science/python/": "structure",
    "/libs/data-science/r/": "structure",

    // 数据开发
    // 编程语言
    "/libs/data-develop/program/java/": "structure",
    "/libs/data-develop/program/scala/": "structure",
    // 数据库管理
    "/libs/data-develop/database-manage/mysql/": "structure",
    // 数据处理框架
    "/libs/data-develop/data-process-framework/hadoop/": "structure",

    // 前端开发
    // "/libs/front_end/html/": "structure",
    // "/libs/front_end/css/": "structure",
    // "/libs/front_end/javascript/": "structure",
});
