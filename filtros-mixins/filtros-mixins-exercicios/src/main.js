import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter("filtro", (valor)=>{
	return valor + "."
});

new Vue({
	render: h => h(App)
}).$mount('#app')
