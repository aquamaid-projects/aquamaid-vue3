// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: "app/product",
    dir: {
        pages: "components/pages",
        layouts: "components/templates",
        middleware: "scripts/middleware",
        public: "public",
        assets: "components/assets",
    },
    css: [
        '/styles/foundation/reset.css',
    ],
    alias: {},

    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    modules: [
        '@nuxt/test-utils',
        '@nuxt/eslint',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
    ],
    typescript: {
        typeCheck: true
    },
    i18n: {
        vueI18n: "./app/product/lib/i18n/location.ts",
        bundle: {
            optimizeTranslationDirective: false,
        }
    }
})