import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './style/style.css'
import Layout from "./layout.vue";
import './style/enhanced-mark.css'

export default {
    extends: DefaultTheme,
    Layout,
};