if (window.requirejs) {
	requirejs.config({
		baseUrl: './',
		config: {'loader': {'css': 'inject', 'templateVar': '__template__'}},
		paths: {
			'loader': 'common/js/loader',
		},
	})

	requirejs([
		'router',
		'store/index'
	], function (router, store) {
		var Vue = window.Vue

		new Vue({
			el: '#app',
			router: router,
			store: store,
			mounted: function () {

				this.$store.commit('updateUid', '508480')
				console.log('Root mounted!', this.$store.state)
			},
		})
	})
}
