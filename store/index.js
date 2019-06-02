define([], function () {
	var store = new window.Vuex.Store({
		state: function () {
			return {
				username: '',
				uid: '',
			}
		},
		mutations: {
			updateUid: function (state, newUid) {
				state.uid = newUid
			},
			updateUsername: function (state, newUsername) {
				state.username = newUsername
			},
		},
	})

	store.subscribe(function (mutation, state) {

		switch (mutation.type) {
			case 'updateUid':
				console.log('Uid updated:', state.uid)
				break
			case 'updateUsername':
				console.log('Username updated:', state.username)
				break
			default:
		}
	})

	return store
})
