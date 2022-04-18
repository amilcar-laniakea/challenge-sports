/** @format */

import React, { useEffect, useState } from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

import { ContextGlobalConsumer } from '../../../context'

import { ArrowLeftOutlined } from '@ant-design/icons'

import './style.scss'

export default function Header() {
	const navigate = useNavigate()
	const location = useLocation()
	const { isMainTitle } = ContextGlobalConsumer()
	const [isScroll, setScroll] = useState(0)

	useEffect(() => {
		const handleClickOutside = (e) => {
			setScroll(e.target.documentElement.scrollTop)
		}
		document.addEventListener('scroll', handleClickOutside)
		return () => {
			document.removeEventListener('scroll', handleClickOutside)
		}
	}, [])

	return (
		<>
			<div className='sw-header-spacer' />
			<div className={`${isScroll > 0 ? 'sw-header-container-sticky' : ''} sw-header-container`}>
				{location.pathname !== '/' && <ArrowLeftOutlined className='sw-header-arrow' onClick={() => navigate(-1)} />}
				<h1 className='sw-header-title'>{isMainTitle}</h1>
			</div>
		</>
	)
}
