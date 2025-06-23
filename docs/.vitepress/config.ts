import { defineConfig } from "vitepress";
import callout from 'vitepress-plugin-callout'
import markdownit from 'markdown-it'
import container from "markdown-it-container";
import mark from "markdown-it-mark";
import lightbox from "vitepress-plugin-lightbox"


export default defineConfig({
    lang: 'zh-CN',
    title: 'Blog',
    description: 'JY learning blog',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
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
            md.use(lightbox, {});
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
                    { text: 'COMP90024', link: '/subjects/COMP90024/index' },
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
                    { text: 'MUTC Website', link: 'https://www.melbunitriathlon.club' }
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
        outline: 'deep',
        sidebar: {
            '/subjects/COMP90024': [
                {
                    text: 'Introduction',
                    collapsed: true,
                    link: '/subjects/COMP90024/'
                },
                {
                    text: 'Week 1 Information Session & How we got here',
                    collapsed: true,
                    link: '/subjects/COMP90024/week 1'
                },
                {
                    text: 'Week 2 Distributed and Parallel Computing Systems',
                    collapsed: true,
                    link: '/subjects/COMP90024/week 2'
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
                {
                    text: 'Week 5 Containerization and Docker & CI/CD',
                    collapsed: true,
                    link: '/subjects/COMP90024/week 5'
                },
                {
                    text: 'Week 6 Kubernetes & ReST',
                    collapsed: true,
                    link: '/subjects/COMP90024/week 6'
                },
                {
                    text: 'Week 7 Serverless(SaaS) and Fission',
                    collapsed: true,
                    link: '/subjects/COMP90024/week 7'
                },
                {
                    text: 'Week 8 Big Data and ElasticSearch',
                    collapsed: true,
                    link: '/subjects/COMP90024/week 8'
                },
                {
                    text: 'Week 9 Virtualisation & Amazon AWS vs MRC',
                    collapsed: true,
                    link: '/subjects/COMP90024/week 9'
                },
                {
                    text: 'Week 10 Security and Clouds',
                    collapsed: true,
                    link: '/subjects/COMP90024/week 10'
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