import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import VueTextareaAutosize from 'vue-textarea-autosize'
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueTextareaAutosize)
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
