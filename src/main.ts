import {createApp} from 'vue'
import App from './App.vue'
import store from "@/store/index"
import "@/styles/base.css"
import "@/styles/Tailwind.css"
import {router} from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import '@/styles/common.scss'
// import '@/mockjs/index.ts'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "./permission.ts"; // permission control
import zhCn from "element-plus/es/locale/lang/zh-cn"







const app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}






// 修改分页器默认文字
zhCn.el.pagination.total = "总共：" + `{total}` + "条"
zhCn.el.pagination.goto = "跳转至"


app.use(store)
    .use(router)
    .use(ElementPlus, {locale: zhCn})
    .mount('#app')

