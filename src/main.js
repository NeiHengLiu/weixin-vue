import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import Router from 'vue-router'
import routes from './router'   // 加载自定义路由模版
import axios from 'axios'       // 加载axios
import Mockjs from './mockjs'     // 加载自定义的mockjs
import store from './vuex'       // 加载自定义vuex
import { Toast, Indicator } from 'mint-ui'
import '@/assets/css/base.css'

Vue.use(Router);
Vue.use(Mint);

Vue.config.productionTip = false;

// 初始路由
 let router = new Router({
	routes
})

// 定义全局axios
window.axios = axios;

// 将 Indicator 改写成 Vue 的原型属性
Vue.prototype.Indicator = Indicator;

// 将 Toast 改写成 Vue 的原型属性
Vue.prototype.Toast = Toast;

// 转换日期格式，如：2018年01月09日 晚上19:35
Vue.prototype.dateFormat = dateValue => {
	let initDate = new Date(dateValue);

	// 判断时间区间
	let getInterval = v => {
		let str = '';
		if(v >= 0 && v < 6){
			str = '凌晨';
		} else if (v >= 6 && v < 13){
			str = '上午';
		} else if (v >= 13 && v < 19) {
			str = '下午';
		} else {
			str = '晚上';
		}
		return str;
	}

	let option = {
		Year: initDate.getFullYear(),	// 年
		Month: initDate.getMonth()+1 < 10 ? '0' + Number(initDate.getMonth()+1) : initDate.getMonth()+1 ,	// 月
		Day: initDate.getDate() < 10 ? '0' + initDate.getDate() : initDate.getDate(),	// 日
		Hours: initDate.getHours() < 10 ? '0' + initDate.getHours() : initDate.getHours(),		// 小时
		Minutes: initDate.getMinutes() < 10 ? '0' + initDate.getMinutes() : initDate.getMinutes()	// 分钟
	}

	let options = {
		getCDateTime () {
			return option.Year + '年' + option.Month + '月' + option.Day + '日 ' + getInterval(option.Hours) + option.Hours + ':' + option.Minutes
		},
		getCTime () {
			return initDate.getTime()
		}
	}
	
	return options;
}

// 监听全局路由
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requireAuth)) {
		if (store.state.token === '') {
			next({
				path: '/login',
				query: {
					backURL: to.fullPath
				}
			});
		} else {
			next();
		}
	} else {
		next();
	}
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})