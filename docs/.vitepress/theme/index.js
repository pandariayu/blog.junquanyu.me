import DefaultTheme from 'vitepress/theme'
import './custom.css'
import './style/style.css'
import Layout from "./layout.vue";

export default {
    extends: DefaultTheme,
    Layout,
};