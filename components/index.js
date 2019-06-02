define([], function () {
	var Vue = window.Vue
	var components = Array.prototype.slice.call(arguments)
	components.forEach(function (component) {
		Vue.component(component.name, component)
	})
})
