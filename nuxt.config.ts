// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [
        '@nuxt/test-utils',
        '@nuxt/eslint',
        '@nuxtjs/i18n',
        '@pinia/nuxt'
    ],
    i18n: {
        // 他の設定...
        bundle: {
            optimizeTranslationDirective: false,  // この行を追加
        }
    }
})