import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// Viteの設定ファイル
export default defineConfig({
    plugins: [vue()],
    optimizeDeps: {
        include: ['@storybook/vue3'],
    },
});
