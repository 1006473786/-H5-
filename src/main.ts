import './assets/style/main.css'
import './assets/style/common.less'
import { createApp } from 'vue'
//引入状态管理器 pinia
import { createPinia } from 'pinia'
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import { Lazyload } from 'vant';

// 接收pinia
const pinia = createPinia()
const app = createApp(App)
// 挂载
app.use(Lazyload, {
    lazyComponent: true,
});

app.use(pinia)
app.use(router)
app.use(Vant);
app.mount('#app')
