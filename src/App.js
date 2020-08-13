import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-js'

import Login from './components/Login/Login'
import Player from './components/Player/Player'
import { getTokenFromUrl } from './config/spotify'
import { useDataLayerValue } from './components/Reducer/DataLayer'
import './App.css'

const spotify = new SpotifyWebApi()

function App() {
	const [token, setToken] = useState(null)
	const [{ user }, dispatch] = useDataLayerValue()

	useEffect(() => {
		const hash = getTokenFromUrl()
		window.location.hash = ''

		const _token = hash.access_token

		if (_token) {
			setToken(_token)
			spotify.setAccessToken(_token)

			spotify.getMe().then((user) => {
				console.log('person ', user)

				dispatch({
					type: 'SET_USER',
					user,
				})
			})
		}
		console.log('TOKEN', token)
	}, [])

	console.log('user', user)

	return <div className='app'>{token ? <Player /> : <Login />}</div>
}

export default App
