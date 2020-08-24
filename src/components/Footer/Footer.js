import React from 'react'

import {
	PlayCircleOutline,
	SkipPrevious,
	SkipNext,
	Shuffle,
	Repeat,
	PlaylistPlay,
	VolumeDown,
} from '@material-ui/icons'
import { Grid, Slider } from '@material-ui/core'
import './Footer.css'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__left'>
				<img
					className='footer__albumLogo'
					src='https://c-sf.smule.com/rs-s40/arr/6a/1a/e7fdd0aa-4fd1-4a85-bd2d-14d03ab25f39_1024.jpg'
					alt=''
				/>
				<div className='footer__songInfo'>
					<h4>Sin Medir Distancias</h4>
					<p>Diomedes Diaz</p>
				</div>
			</div>

			<div className='footer__center'>
				<Shuffle className='footer__green' />
				<SkipPrevious className='footer__icon' />
				<PlayCircleOutline fontSize='large' className='footer__icon' />
				<SkipNext className='footer__icon' />
				<Repeat className='footer__green' />
			</div>

			<div className='footer__right'>
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlay />
					</Grid>
					<Grid item>
						<VolumeDown />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby='continuous-slider' />
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default Footer
