define([
	'loader!views/home.vue'
], function (Home) {
	return new window.VueRouter({
		routes: [
			{
				name: 'home',
				path: '/',
				component: Home
			}
		]
	})
})
