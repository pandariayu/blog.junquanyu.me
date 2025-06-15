import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline"; 

export default defineConfig({
    base: '/blog/',
    head: [['link', { rel: 'icon', href: '/blog/favicon.ico' }]],
    markdown: {
        //行号显示
        lineNumbers: true,

        //时间线
        config: (md) => {
            md.use(timeline);
        },
    },
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh-CN',
            title: 'When2meet 小程序',
            description: '微信小程序啥时碰是When2meet的微信小程序版本，用于帮助用户快速创建和加入活动，并进行活动管理。',
            themeConfig: {
                logo: "/logo.png",
                nav: [
                    { text: '首页', link: '/' },
                    { text: '指南', link: '/guide/intro' }
                ],
                search: {
                    provider: 'local',
                    options: {
                        locales: {
                            root: {
                                translations: {
                                    button: {
                                        buttonText: '搜索文档',
                                        buttonAriaLabel: '搜索文档'
                                    },
                                    modal: {
                                        noResultsText: '无法找到相关结果',
                                        resetButtonTitle: '清除查询条件',
                                        footer: {
                                            selectText: '选择',
                                            navigateText: '切换'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                socialLinks: [
                    { icon: 'github', link: 'https://github.com/yujunquan0127/when2meet-weapp' }
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
                    pattern: "https://github.com/yujunquan0127/when2meet-weapp/edit/master/docs/:path",
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
                            text: '项目概述',
                            link: '/guide/intro'
                        },
                        {
                            text: '项目结构',
                            collapsed: true,
                            link: '/guide/project-structure'
                        },
                        {
                            text: '前置要求',
                            collapsed: true,
                            link: '/guide/prerequisites'
                        },
                        {
                            text: 'API 设计',
                            collapsed: true,
                            link: '/guide/api-design'
                        },
                        {
                            text: '数据库配置',
                            collapsed: true,
                            link: '/guide/database-setup'
                        },
                        {
                            text: '项目部署',
                            collapsed: true,
                            link: '/guide/deployment'
                        },
                        {
                            text: '后端算法',
                            collapsed: true,
                            items: [
                                { text: "最佳时间推荐算法", link: "/guide/backend/bestTimeRecommend" },
                                { text: "群组时间重叠计算算法", link: "/guide/backend/groupTimeOverlap" },
                                { text: "后端通知算法", link: "/guide/backend/backendNotification" },
                                { text: "多维度时间过滤算法", link: "/guide/backend/filterTime" },
                            ],
                        }
                    ]
                }
            }
        },
        en: {
            label: 'English',
            lang: 'en-US',
            title: 'When2meet WeApp',
            description: 'A WeChat mini-program version of When2meet for helping users quickly create and join events, and manage activities.',
            themeConfig: {
                logo: "/logo.png",
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Guide', link: '/en/guide/intro' }
                ],
                search: {
                    provider: 'local'
                },
                socialLinks: [
                    { icon: 'github', link: 'https://github.com/yujunquan0127/when2meet-weapp' }
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
                    text: "Edit this page on GitHub",
                    pattern: "https://github.com/yujunquan0127/when2meet-weapp/edit/main/docs/:path",
                },
                lastUpdated: {
                    text: "Last updated",
                    formatOptions: {
                        dateStyle: "short",
                        timeStyle: "medium",
                    },
                },
                sidebar: {
                    '/en/guide/': [
                        {
                            text: 'Project Overview',
                            link: '/en/guide/intro'
                        },
                        {
                            text: 'Project Structure',
                            collapsed: true,
                            link: '/en/guide/project-structure'
                        },
                        {
                            text: 'Prerequisites',
                            collapsed: true,
                            link: '/en/guide/prerequisites'
                        },
                        {
                            text: 'API Design',
                            collapsed: true,
                            link: '/en/guide/api-design'
                        },
                        {
                            text: 'Database Setup',
                            collapsed: true,
                            link: '/en/guide/database-setup'
                        },
                        {
                            text: 'Deployment',
                            collapsed: true,
                            link: '/en/guide/deployment'
                        },
                        {
                            text: 'Backend Algorithms',
                            collapsed: true,
                            items: [
                                { text: "Best Time Recommendation", link: "/en/guide/backend/bestTimeRecommend" },
                                { text: "Group Time Overlap Calculation", link: "/en/guide/backend/groupTimeOverlap" },
                                { text: "Backend Notification", link: "/en/guide/backend/backendNotification" },
                                { text: "Multi-dimensional Time Filter", link: "/en/guide/backend/filterTime" },
                            ],
                        }
                    ]
                }
            }
        }
    }
})
