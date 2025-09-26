import { defineConfig } from "vitepress";
import callout from 'vitepress-plugin-callout'
import markdownit from 'markdown-it'
import container from "markdown-it-container";
import mark from "markdown-it-mark";
import lightbox from "vitepress-plugin-lightbox";
import multipleChoicePlugin from 'markdown-it-multiple-choice';
import {
    InlineLinkPreviewElementTransform
} from '@nolebase/vitepress-plugin-inline-link-preview/markdown-it'
import {
    GitChangelog,
    GitChangelogMarkdownSection,
} from '@nolebase/vitepress-plugin-git-changelog/vite'

export default defineConfig({
    lang: 'en-US',
    title: 'Blog',
    description: 'JY learning blog',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    vite: {
        optimizeDeps: {
            exclude: [
                '@nolebase/vitepress-plugin-inline-link-preview/client',
                '@nolebase/vitepress-plugin-enhanced-readabilities/client',
                'vitepress',
                '@nolebase/ui',
            ],
        },
        ssr: {
            noExternal: [
                '@nolebase/vitepress-plugin-inline-link-preview',
                '@nolebase/vitepress-plugin-highlight-targeted-heading',
                '@nolebase/vitepress-plugin-enhanced-readabilities',
                '@nolebase/ui',
                'markdown-it-multiple-choice',
            ],
        },
        plugins: [
            GitChangelog({
                repoURL: () => 'https://github.com/pandariayu/blog.junquanyu.me',
            }),
            GitChangelogMarkdownSection({
                sections: {
                    disableContributors: true,
                },
            }),
        ],
    },
    ignoreDeadLinks: true,
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
            md.use(InlineLinkPreviewElementTransform);
            md.use(multipleChoicePlugin)
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
                    { text: 'SWEN90016', link: '/subjects/SWEN90016/index' },
                    { text: 'SWEN90004', link: '/subjects/SWEN90004/index' },
                    { text: 'SWEN90009', link: '/subjects/SWEN90009/project-background' },
                    { text: 'SWEN90006', link: '/subjects/SWEN90006/index' },
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
                    link: '/subjects/COMP90024/week-1'
                },
                {
                    text: 'Week 2 Distributed and Parallel Computing Systems',
                    collapsed: true,
                    link: '/subjects/COMP90024/week-2'
                },
                {
                    text: 'Week 3 HPC & Spartan',
                    collapsed: true,
                    link: '/subjects/COMP90024/week-3'
                },
                {
                    text: 'Week 4 Cloud Computing, OpenStack & Introducing NeCTAR',
                    collapsed: true,
                    link: '/subjects/COMP90024/week-4'
                },
                {
                    text: 'Week 5 Containerization and Docker & CI/CD',
                    collapsed: true,
                    link: '/subjects/COMP90024/week-5'
                },
                {
                    text: 'Week 6 Kubernetes & ReST',
                    collapsed: true,
                    link: '/subjects/COMP90024/week-6'
                },
                {
                    text: 'Week 7 Serverless(SaaS) and Fission',
                    collapsed: true,
                    link: '/subjects/COMP90024/week-7'
                },
                {
                    text: 'Week 8 Big Data and ElasticSearch',
                    collapsed: true,
                    link: '/subjects/COMP90024/week-8'
                },
                {
                    text: 'Week 9 Virtualisation & Amazon AWS vs MRC',
                    collapsed: true,
                    link: '/subjects/COMP90024/week-9'
                },
                {
                    text: 'Week 10 Security and Clouds',
                    collapsed: true,
                    link: '/subjects/COMP90024/week-10'
                },
                {
                    text: 'Mock Exam',
                    collapsed: true,
                    link: '/subjects/COMP90024/mock-exam'
                }
            ],
            '/subjects/SWEN90016': [
                {
                    text: 'Introduction',
                    collapsed: true,
                    link: '/subjects/SWEN90016/'
                },
                {
                    text: 'Week 1 Projects',
                    collapsed: true,
                    link: '/subjects/SWEN90016/week-1'
                },
                {
                    text: 'Week 2 Incremental SDLC',
                    collapsed: true,
                    link: '/subjects/SWEN90016/week-2'
                },
                {
                    text: 'Week 3 Risk Management',
                    collapsed: true,
                    link: '/subjects/SWEN90016/week-3'
                },
                {
                    text: 'Week 4 Stakeholder and Communication',
                    collapsed: true,
                    link: '/subjects/SWEN90016/week-4'
                },
                {
                    text: 'Week 5 Agile',
                    collapsed: true,
                    link: '/subjects/SWEN90016/week-5'
                },
                {
                    text: 'Week 6 Software Quality Management',
                    collapsed: true,
                    link: '/subjects/SWEN90016/week-6'
                },
                {
                    text: 'Week 7 Formal Project Scheduling',
                    collapsed: true,
                    link: '/subjects/SWEN90016/week-7'
                },
                {
                    text: 'Week 8 Project Tracking and Control',
                    collapsed: true,
                    link: '/subjects/SWEN90016/week-8'
                },
                {
                    text: 'Week 9 Ethics in Professional Practice',
                    collapsed: true,
                    link: '/subjects/SWEN90016/week-9'
                },
                {
                    text: 'Week 10 Scrum at Scale',
                    collapsed: true,
                    link: '/subjects/SWEN90016/week-10'
                },
                {
                    text: 'Mock Exam',
                    collapsed: true,
                    link: '/subjects/SWEN90016/mock-exam'
                },
                {
                    text: 'Review Part 1',
                    collapsed: true,
                    link: '/subjects/SWEN90016/review-part-1'
                },
                {
                    text: 'Review Part 2',
                    collapsed: true,
                    link: '/subjects/SWEN90016/review-part-2'
                },
                {
                    text: 'Review Part 3',
                    collapsed: true,
                    link: '/subjects/SWEN90016/review-part-3'
                },
                {
                    text: 'Review Part 4',
                    collapsed: true,
                    link: '/subjects/SWEN90016/review-part-4'
                }
            ],
            '/subjects/SWEN90009': [
                {
                    text: 'Project Background',
                    collapsed: true,
                    link: '/subjects/SWEN90009/project-background'
                },
                {
                    text: 'Requirements Elicitation',
                    collapsed: true,
                    link: '/subjects/SWEN90009/requirement-elicitation'
                },
                {
                    text: 'Early Solution Brainstorming',
                    collapsed: true,
                    link: '/subjects/SWEN90009/early-solution-brainstorming'
                },
                {
                    text: 'Personas',
                    collapsed: true,
                    link: '/subjects/SWEN90009/personas'
                },
                {
                    text: 'User Stories',
                    collapsed: true,
                    link: '/subjects/SWEN90009/user-stories'
                },
                {
                    text: 'Acceptance Criteria',
                    collapsed: true,
                    link: '/subjects/SWEN90009/acceptance-criteria'
                },
                {
                    text: 'Usability Testing',
                    collapsed: true,
                    link: '/subjects/SWEN90009/usability-testing'
                },
                {
                    text: 'Agile Ceremonies',
                    collapsed: true,
                    link: '/subjects/SWEN90009/agile-ceremonies'
                },
                {
                    text: 'Interview Preparation',
                    collapsed: true,
                    link: '/subjects/SWEN90009/interview-preparation'
                }
            ],
            '/subjects/SWEN90004': [
                {
                    text: 'Introduction',
                    collapsed: true,
                    link: '/subjects/SWEN90004/'
                },
                {
                    text: 'Java',
                    collapsed: true,
                    link: '/subjects/SWEN90004/java'
                },
                {
                    text: 'Finite State Process',
                    collapsed: true,
                    link: '/subjects/SWEN90004/fsp'
                },
                {
                    text: 'Complex System',
                    collapsed: true,
                    link: '/subjects/SWEN90004/complex-system'
                },
                {
                    text: 'Cellar Automata',
                    collapsed: true,
                    link: '/subjects/SWEN90004/cellar-automata'
                },
                {
                    text: 'Agent-based Modelling',
                    collapsed: true,
                    link: '/subjects/SWEN90004/agents-based-model'
                },
                {
                    text: 'Petri Nets',
                    collapsed: true,
                    link: '/subjects/SWEN90004/petri-nets'
                },
                {
                    text: 'Practice exam part 2',
                    collapsed: true,
                    link: '/subjects/SWEN90004/practice-exam-part-2'
                },
            ],
            '/subjects/SWEN90006': [
                {
                    text: 'Introduction',
                    collapsed: true,
                    link: '/subjects/SWEN90006/'
                },
                {
                    text: 'Introduction to Software Testing',
                    collapsed: true,
                    link: '/subjects/SWEN90006/week-1'
                },
                {
                    text: 'Input Partitioning & Boundary Value Analysis',
                    collapsed: true,
                    link: '/subjects/SWEN90006/week-2'
                },
                {
                    text: 'Boundary-Value Analysis and Control-Flow Analysis',
                    collapsed: true,
                    link: '/subjects/SWEN90006/week-3'
                },
                {
                    text: 'Mutation analysis and static data-flow analysis',
                    collapsed: true,
                    link: '/subjects/SWEN90006/week-4'
                },
                {
                    text: 'Module and object-oriented testing',
                    collapsed: true,
                    link: '/subjects/SWEN90006/week-5'
                },
                {
                    text: 'Test oracles; and testing & integration',
                    collapsed: true,
                    link: '/subjects/SWEN90006/week-6'
                },
                {
                    text: 'Introduction to Security Testing',
                    collapsed: true,
                    link: '/subjects/SWEN90006/week-7'
                },
                {
                    text: 'Mutation-based and Generation-based black-box fuzzing',
                    collapsed: true,
                    link: '/subjects/SWEN90006/week-8'
                },
                {
                    text: 'Code coverage-guided greybox fuzzing',
                    collapsed: true,
                    link: '/subjects/SWEN90006/week-9'
                },
            ]
        }
    }
});
