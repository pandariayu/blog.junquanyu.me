import { defineConfig } from "vitepress";

export default defineConfig({
    base: '/blog/',
    lang: 'zh-CN',
    title: 'Blog',
    description: 'Front-end learning',
    head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
    markdown: {
        math: true
    },
    themeConfig: {
        logo: "/logo.svg",
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Note', link: '/guide/intro' }
        ],
        search: {
            provider: 'local'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/yujunquan0127/blog' }
        ],
        footer: {
            message: "MIT Licensed",
            copyright: "Copyright © 2025 Junquan Yu",
        },
        docFooter: {
            prev: "上一页",
            next: "下一页",
        },
        editLink: {
            text: "在 GitHub 上编辑此页",
            pattern:
                "https://github.com/yujunquan0127/blog/edit/main/docs/:path",
        },
        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "short",
                timeStyle: "medium",
            },
        },
        sidebar: {
            '/guide/': [
                {
                    text: 'Introduction',
                    collapsed: true,
                    link: '/guide/intro'
                },
                {
                    text: 'COMP90024 Cluster and Cloud Computing',
                    collapsed: true,
                    items: [
                        { text: "Week 1 Information Session & How we got here", link: "/guide/COMP90024/week1" },
                        { text: "Week 2 Distributed and Parallel Computing Systems", link: "/guide/COMP90024/week2" },
                    ],
                },
                {
                    text: 'SWEN90016 Software Progress Management',
                    collapsed: true,
                    items: [
                        { text: "Week 1 ", link: "/guide/SWEN90016/week1" },
                    ],
                },
                {
                    text: 'SWEN90004 Modelling Complex Software Systems',
                    collapsed: true,
                    items: [
                        { text: "Java", link: "/guide/SWEN90004/Java" },
                        { text: "Finite State Process", link: "/guide/SWEN90004/FSP" },
                        { text: "Complex System", link: "/guide/SWEN90004/Complex System"},
                        { text: "Cellar Automata", link: "/guide/SWEN90004/Cellar Automata"},
                        { text: "Agent-based Modelling", link: "/guide/SWEN90004/Agents based Model"},
                        { text: "Petri Nets", link: "/guide/SWEN90004/Petri Nets" },
                        { text: "Practice exam", link: "/guide/SWEN90004/Practice exam part 2" },
                    ],
                }
            ]
        }
    }
});