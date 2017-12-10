import Vue from 'vue';
import VueRouter from 'vue-router';
import VueRource from 'vue-resource';
import App from './App.vue';
// import router from './router/router.js';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

//这里引入后，在它里面的.vue文件都可以用index.styl里面样式了。
import '../../common/stylus/index.styl'

Vue.use(VueRouter);
Vue.use(VueRource);

const routers=[
  {path:'/goods',component:goods},
  {path:'/ratings',component:ratings},
  {path:'/seller',component:seller}
]
const router = new VueRouter({
  routes:routers,
  linkActiveClass:'active'
});
/* eslint-disable no-new */
// Vue.component('App', App);
new Vue({
  el:'#app',
  router,
  render: h => h(App)
});


// let app=Vue.extend(App);
// let router=new VueRouter();
// router.map({
//   '/goods':{
//     component:goods
//   }
// })

// router.start(app,'#app')