export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// token: null,
	token:
		'BQCrmuFmGzbid-byfaNcX1PcED4F4wdNA8dv6dJYwivT4vYGY-KQiWVzkUdfPYhyaSPFo_HDXSgn8kJ3dTB0Mvwc7NQci9RKrAWajtFr_7CzPN6mN2AeF4Z_Pl62ZalCfFXdq2ZPcqbdtB_8LzQbZjkV-qVuPL6gAwH3jrs',
}

const reducer = (state, action) => {
	console.log('action', action)

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			}
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			}
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			}
		default:
			return state
	}
}

export default reducer
