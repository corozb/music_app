import React, { useEffect } from 'react'
import './App.css'

import Login from './components/Login/Login'
import { getTokenFromUrl } from './config/spotify'

function App() {
	useEffect(() => {
		const hash = getTokenFromUrl()
		window.location.hash = ''

		const _token = hash.access_token

		console.log('TOKEN', _token)
	}, [])

	return (
		<div className='App'>
			<Login />
		</div>
	)
}

export default App
