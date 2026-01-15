// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

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
  },

  integrations: [preact()],
});