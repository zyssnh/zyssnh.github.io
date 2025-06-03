import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {
        text: "系统编程",
        prefix: "/libs/system-program/",
        children: [
            "c/",
            "cpp/",
        ]
    },
    {
        text: "网站开发",
        prefix: "/libs/website-develop/",
        children: [
            "html/",
            "css/",
            "javascript/",
            "python/",
        ]
    },
    {
        text: "数据科学",
        prefix: "/libs/data-science/",
        children: [
            "python/",
            "r/",
        ]
    },
    {
        text: "数据开发",
        prefix: "/libs/data-develop/",
        children: [
            {
                text: "编程语言",
                prefix: "program",
                children: [
                    "java/",
                    "scala/",
                ]
            },
            {
                text: "数据库管理",
                prefix: "database-manage",
                children: [
                    "mysql/"
                ]
            },
            {
                text: "数据处理框架",
                prefix: "data-process-framework",
                children: [
                    "hadoop/"
                ]
            }
        ]
    }
    // {
    //     text: "前端",
    //     prefix: "/libs/front_end/",
    //     children: [
    //         "html/",
    //         "css/",
    //         "javascript/"
    //     ]
    // }
]);
