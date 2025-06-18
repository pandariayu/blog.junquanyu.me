import { defineConfig } from "vitepress";
import callout from 'vitepress-plugin-callout'
import markdownit from 'markdown-it'

export default defineConfig({
    base: '/blog/',
    lang: 'zh-CN',
    title: 'Blog',
    description: 'JY learning blog',
    head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
    markdown: {
        config: (md: markdownit) => {
            md.use(callout)
        },
        math: true
    },
    themeConfig: {
        logo: {
            light: '/blog/logo.svg',
            dark: '/blog/logo_dark.svg'
        },
        nav: [
            {
                text: 'Unimelb Subjects',
                items: [
                    { text: 'COMP90024', link: '/subjects/COMP90024/intro' },
                    { text: 'SWEN90016', link: '/subjects/SWEN90016/intro' },
                    { text: 'SWEN90004', link: '/subjects/SWEN90004/intro' },
                ],
            },
            {
                text: 'Programming',
                items: [
                    { text: 'React', link: '/programming/react' },
                    { text: 'Vue', link: '/programming/vue' },
                    { text: 'Node.js', link: '/programming/nodejs' },
                    { text: 'Python', link: '/programming/python' },
                ],
            },
            {
                text: 'Projects',
                items: [
                    { text: 'MUTC Website', link: 'https://www.melbunitriathlon.club' },
                    { text: 'When2meet WeApp', link: 'https://yujunquan0127.github.io/when2meet-weapp/' },
                ],
            },
            {
                text: 'About Me',
                link: '/about'
            },
        ],
        search: {
            provider: 'local'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/yujunquan0127/blog' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/junquan-yu/' },
        ],
        footer: {
            message: "MIT Licensed",
            copyright: "Copyright © 2025 Junquan Yu",
        },
        docFooter: {
            prev: "Previous",
            next: "Next",
        },
        editLink: {
            text: "Edit on GitHub",
            pattern:
                "https://github.com/yujunquan0127/blog/edit/main/docs/:path",
        },
        lastUpdated: {
            text: "Last Updated",
            formatOptions: {
                dateStyle: "short",
                timeStyle: "medium",
            },
        },
        sidebar: {
            '/subjects/COMP90024': [
                {
                    text: 'Introduction',
                    collapsed: true,
                    link: '/subjects/COMP90024/intro'
                },
                {
                    text: 'Week 1 Information Session & How we got here',
                    collapsed: true,
                    link: '/subjects/COMP90024/week1'
                },
                {
                    text: 'Week 2 Distributed and Parallel Computing Systems',
                    collapsed: true,
                    link: '/subjects/COMP90024/week2'
                },
            ],
            '/subjects/SWEN90016': [
                {
                    text: 'Introduction',
                    collapsed: true,
                    link: '/subjects/SWEN90016/intro'
                },
                {
                    text: 'Week 1',
                    collapsed: true,
                    link: '/subjects/SWEN90016/week1'
                }
            ],
            '/subjects/SWEN90004': [
                {
                    text: 'Introduction',
                    collapsed: true,
                    link: '/subjects/SWEN90004/intro'
                },
                {
                    text: 'Java',
                    collapsed: true,
                    link: '/subjects/SWEN90004/Java'
                },
                {
                    text: 'Finite State Process',
                    collapsed: true,
                    link: '/subjects/SWEN90004/FSP'
                },
                {
                    text: 'Complex System', 
                    collapsed: true,
                    link: '/subjects/SWEN90004/Complex System'
                },
                {
                    text: 'Cellar Automata',
                    collapsed: true,
                    link: '/subjects/SWEN90004/Cellar Automata'
                },
                {
                    text: 'Agent-based Modelling',
                    collapsed: true,
                    link: '/subjects/SWEN90004/Agents based Model'
                },
                {
                    text: 'Petri Nets',
                    collapsed: true,
                    link: '/subjects/SWEN90004/Petri Nets'
                },  
                {
                    text: 'Practice exam part 2',
                    collapsed: true,
                    link: '/subjects/SWEN90004/Practice exam part 2'
                },
            ]
        }
    }
});