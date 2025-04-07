import type {StorybookConfig} from '@storybook/vue3-vite';

const config: StorybookConfig = {
    "stories": [
        "../document/component/**/*.mdx",
        "../document/component/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/experimental-addon-test",
        "@storybook/addon-a11y",
        "storybook-i18n",
        "@junk-temporary-prototypes/addon-docs",
    ],
    "framework": {
        "name": "@storybook/app-vite",
        "options": {}
    }
};
export default config;