import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
    base: "/mynotes/", // /mynotes/ 路径
    lang: 'zh-CN', // 语言
    title: 'My Notes', // 站点标题 主标题
    description: 'My first VuePress Site', // 描述
    // locales: {}, // 多语言

    theme: defaultTheme({
        // logo
        logo: 'https://vuejs.press/images/hero.png',

        // 顶部菜单
        navbar: ['/', '/js/'],

        // /js/： 实际为/js/index.md 或 /js/README.md

        // 左侧菜单
        sidebar: [
            "/",
            {
                text: "vue文档",       // 标题
                link: "/vue/",        // 路径
                collapsible: true,    // 是否可折叠
                children: [
                    "v1",
                    "v2"
                ]
            },
            {
                text: "react文档",       // 标题
                link: "/react/",        // 路径
                collapsible: true,    // 是否可折叠
                children: [
                    "r1",
                    "r2.md"
                ]
            },
            {
                text: "js基础",       // 标题
                link: "/js/",        // 路径
                collapsible: true,    // 是否可折叠
                children: []
            },
            {
                text: "Mac",       // 标题
                link: "/mac/",        // 路径
                collapsible: true,    // 是否可折叠
                children: [
                    "brew",
                    "shell"
                ]
            }
        ]

    }),

    bundler: viteBundler(),
})
