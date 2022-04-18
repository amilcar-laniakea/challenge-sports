/** @format */

import React from 'react'

import './style.scss'

export default function Error(props) {
	return (
		<div className='sw-error-container'>
			<h1 className='sw-error-title'>Error in Load {props.title}</h1>
		</div>
	)
}
