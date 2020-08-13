const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT
const redirectUri = process.env.REACT_APP_REDIRECT
const clientId = process.env.REACT_APP_CLIENT_ID
const scopes = JSON.parse(process.env.REACT_APP_SCOPES)

export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			let parts = item.split('=')
			initial[parts[0]] = decodeURIComponent(parts[1])
			return initial
		}, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`
