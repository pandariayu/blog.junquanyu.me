import DefaultTheme from 'vitepress/theme'
import './custom.css'

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
import { onMounted } from 'vue'
import { setupMultipleChoice } from 'markdown-it-multiple-choice';

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.use(NolebaseInlineLinkPreviewPlugin)
        app.use(NolebaseGitChangelogPlugin)
    },
    setup() {
        onMounted(() => {
            setupMultipleChoice();
        });
    }
};