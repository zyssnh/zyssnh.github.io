// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkToc from 'remark-toc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import preact from '@astrojs/preact';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://zyssnh.github.io',

    // 为 WSL 环境下的文件更改检测提供支持
    vite: {
        server: {
            watch: {
                // 开始轮询，每 1000 毫秒检查一次文件更改
                interval: 1000,
                usePolling: true,
            },
        },

        plugins: [tailwindcss()],
    },
    markdown: {
        remarkPlugins: [remarkMath, remarkToc, remarkGfm],
        rehypePlugins: [rehypeKatex, rehypeSlug, [
            rehypeAutolinkHeadings, {
                behavior: 'wrap',
                properties: {
                    className: ['heading-anchor'],
                    ariaLabel: '标题锚点',
                },
            },
        ]],
        syntaxHighlight: 'shiki',
        shikiConfig: {
            theme: 'github-dark',
            wrap: true,
        },
    },


    integrations: [preact()],
});