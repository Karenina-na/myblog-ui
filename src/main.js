import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import 'default-passive-events';

const app = createApp(App)
app.use(store)

// 解决bug：页面/路由跳转后，滚动条消失，页面无法滚动
router.afterEach(() => {
  document.querySelector("html").setAttribute("style", "overflow: auto !important;")
});

app.use(PerfectScrollbar)
app.use(router)
app.use(Antd)
app.use(PerfectScrollbar)
app.config.globalProperties.$axios = axios
app.mount('#app')
