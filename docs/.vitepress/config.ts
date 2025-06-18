import { defineConfig } from "vitepress";
import callout from 'vitepress-plugin-callout'
import markdownit from 'markdown-it'
import container from "markdown-it-container";
import mark from "markdown-it-mark";

export default defineConfig({
    base: '/blog/',
    lang: 'zh-CN',
    title: 'Blog',
    description: 'JY learning blog',
    head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
    markdown: {
        config: (md:markdownit) => {
            md.use(container, "button", {
                render: (tokens, idx) => {
                    const token = tokens[idx];
                    if (token.nesting === 1) {
                        const color = tokens[idx].info.trim().replace("button ", "");
                        return `<button class="buttom ${color}">`;
                    }
                    return "</button>";
                },
            });
            md.use(callout);
            md.use(mark);
        },
        math: true
    },
    themeConfig: {
        logo: {
            light: '/logo.svg',
            dark: '/logo_dark.svg'
        },
        nav: [
            {
                text: 'Unimelb Subjects',
                items: [
                    { text: 'COMP90024', link: '/subjects/COMP90024/intro' },
                    { text: 'SWEN90016', link: '/subjects/SWEN90016/intro' },
                    { text: 'SWEN90004', link: '/subjects/SWEN90004/intro' },
                    { text: 'SWEN90009', link: '/subjects/SWEN90009/Project Background' },
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
            { icon: 'github', link: 'https://github.com/yujunquan0127' },
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
                    text: 'Week 1-2 Information Session & How we got here',
                    collapsed: true,
                    link: '/subjects/COMP90024/week 1-2'
                },
                {
                    text: 'Week 3 HPC & Spartan',
                    collapsed: true,
                    link: '/subjects/COMP90024/week 3'
                },
                {
                    text: 'Week 4 Cloud Computing, OpenStack & Introducing NeCTAR',
                    collapsed: true,
                    link: '/subjects/COMP90024/week 4'
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
            '/subjects/SWEN90009': [
                {
                    text: 'Project Background',
                    collapsed: true,
                    link: '/subjects/SWEN90009/Project Background'
                },
                {
                    text: 'Requirements Elicitation',
                    collapsed: true,
                    link: '/subjects/SWEN90009/Requirement Elicitation'
                },
                {
                    text: 'Early Solution Brainstorming',
                    collapsed: true,
                    link: '/subjects/SWEN90009/Early Solution Brainstorming'
                },
                {
                    text: 'Personas',
                    collapsed: true,
                    link: '/subjects/SWEN90009/Personas'
                },
                {
                    text: 'User Stories',
                    collapsed: true,
                    link: '/subjects/SWEN90009/User Stories'
                },
                {
                    text: 'Acceptance Criteria',
                    collapsed: true,
                    link: '/subjects/SWEN90009/Acceptance Criteria'
                },
                {
                    text: 'Usability Testing',
                    collapsed: true,
                    link: '/subjects/SWEN90009/Usability Testing'
                },
                {
                    text: 'Agile Ceremonies',
                    collapsed: true,
                    link: '/subjects/SWEN90009/Agile Ceremonies'
                },
                {
                    text: 'Interview Preparation',
                    collapsed: true,
                    link: '/subjects/SWEN90009/Interview Preparation'
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