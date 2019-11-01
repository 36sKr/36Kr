import Vue from 'vue'
import App from './App'

// 字体图标
// import url("http://at.alicdn.com/t/font_1476368_2232oba8vw.css")
import "./static/font/iconfont.css"

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.HLP_Url="http://rap2api.taobao.org/app/mock/234738/"

const app = new Vue({
    ...App
})
app.$mount()
