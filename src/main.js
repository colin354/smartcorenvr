import "babel-polyfill"
// Vue
import Vue from 'vue'
import i18n from './i18n'
import 'babel-polyfill'
import App from './App'
// 核心插件
import d2Admin from '@/plugin/d2admin'
// store
import store from '@/store/index'
import axios from '@/plugin/axios/http'
// 菜单和路由设置
import router from './router'
import menuHeader from '@/menu/header'
import menuAside from '@/menu/aside'
import { frameInRoutes } from '@/router/routes'

import 'jquery'
import 'jquery-ui'
/* import ampleadmin */
import '@/assets/material/bootstrap/dist/css/bootstrap.min.css'
import '@/assets/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css'
import '@/assets/material/css/animate.css'
import '@/assets/material/css/style.css'
import '@/assets/material/css/colors/default.css'
// import './assets/material/css/colors/megna-dark.css'
import '@/assets/plugins/bower_components/jquery/dist/jquery.min'
import '@/assets/material/bootstrap/dist/js/bootstrap.min'
import '@/assets/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min'
import '@/assets/material/js/jquery.slimscroll'
import '@/assets/material/js/waves'
import '@/assets/material/js/custom.min'
import '@/assets/plugins/bower_components/styleswitcher/jQuery.style.switcher'
import event from '@/components/views/js/event'
import listdatag from '@/components/views/js/dev'
import regionaldata from '@/components/views/js/regional'
Vue.prototype.regionaldata = regionaldata
Vue.prototype.listdatag = listdatag
Vue.prototype.EVENT = event
Vue.prototype.$http = axios
Vue.prototype.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const bus = new Vue()

// 核心插件
Vue.use(d2Admin)

new Vue({
  router,
  store,
  i18n,
  data: {
    bus
  },
  render: h => h(App),
  created () {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('d2admin/page/init', frameInRoutes)
    // 设置顶栏菜单
    this.$store.commit('d2admin/menu/headerSet', menuHeader)
    // 设置侧边栏菜单
    this.$store.commit('d2admin/menu/asideSet', menuAside)
    // 初始化菜单搜索功能
    this.$store.commit('d2admin/search/init', menuHeader)
  },
  mounted () {
    // 展示系统信息
    this.$store.commit('d2admin/releases/versionShow')
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('d2admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.$store.dispatch('d2admin/fullscreen/listen')
  }
}).$mount('#app')
