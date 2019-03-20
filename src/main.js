// 入口文件
import Vue from 'vue'
import App from './App.vue'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import lazyload from 'vue-lazyload'
import loading from './images/loading.gif'
import router from './router.js'
import moment from 'moment'
import './lib/mui/js/mui.js'
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.filter('dateFormat',function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})
import VueResouce from 'vue-resource'
Vue.use(VueResouce)
Vue.use(lazyload,{
  loading
})
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

//设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io'
Vue.http.options.emulateHSON = true
new Vue({
  el:'#app',
  render:p=>p(App),
  router
})
