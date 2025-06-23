import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './style/style.css'
import Layout from "./layout.vue";
import './style/enhanced-mark.css';
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import {
    NolebaseInlineLinkPreviewPlugin,
} from '@nolebase/vitepress-plugin-inline-link-preview/client'

import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'
import {
    NolebaseGitChangelogPlugin
} from '@nolebase/vitepress-plugin-git-changelog/client'

import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.use(NolebaseInlineLinkPreviewPlugin)
        app.use(NolebaseGitChangelogPlugin)
    }
};