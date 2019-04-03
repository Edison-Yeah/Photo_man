// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import axios from 'axios'

import {Button, Menu, Layout, Input, Icon, Select, Cascader, Form, Tooltip,Checkbox} from 'ant-design-vue'
import 'ant-design-vue/lib/button/style/css'
import 'ant-design-vue/lib/menu/style/css'
import 'ant-design-vue/lib/layout/style/css'
import 'ant-design-vue/lib/input/style/css'
import 'ant-design-vue/lib/icon/style/css'
import 'ant-design-vue/lib/select/style/css'
import 'ant-design-vue/lib/cascader/style/css'
import 'ant-design-vue/lib/form/style/css'
import 'ant-design-vue/lib/tooltip/style/css'
import 'ant-design-vue/lib/checkbox/style/css'


Vue.use(Button)
Vue.use(Menu)
Vue.use(Layout)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Select)
Vue.use(Cascader)
Vue.use(Form)
Vue.use(Tooltip)
Vue.use(Checkbox)

Vue.prototype.$http = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
