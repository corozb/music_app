import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import App from './App'
import { DataLayer } from './components/Reducer/DataLayer'
import reducer, { initialState } from './components/Reducer/reducer'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<DataLayer initialState={initialState} reducer={reducer}>
			<App />
		</DataLayer>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
