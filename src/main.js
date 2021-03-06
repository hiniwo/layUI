// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted(){
  	this.$nextTick(function() {
			layui.use('layer');
			layui.use('element');
			layui.use('table');
			layui.use('laypage');
			layui.use('form');
		});
  }
})
