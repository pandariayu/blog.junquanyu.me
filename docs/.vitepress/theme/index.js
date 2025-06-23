import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './style/style.css'
import Layout from "./layout.vue";
import './style/enhanced-mark.css';

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        // 你可以在这里添加其他应用级别的配置
    }
};