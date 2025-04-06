import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Viteの設定ファイル
export default defineConfig({
    plugins: [vue()],
    // Storybook 用に追加するVite設定
    optimizeDeps: {
        include: ['@storybook/vue3'],  // Storybook 用の依存関係を明示的に指定
    },
});
