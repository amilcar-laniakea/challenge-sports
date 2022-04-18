/** @format */

import React from 'react'

import './style.scss'

import svgLoading from '../../../assets/images/spinner.svg'

export default function Loading() {
	return (
		<div className='sw-loading-container'>
			<img className='sw-loading-svg' src={svgLoading} title='loading' alt='loading' />
			<h4 className='sw-loading-title'>Loading</h4>
		</div>
	)
}
