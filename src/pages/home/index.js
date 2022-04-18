/** @format */

import React, { useEffect, useState, useRef, useCallback, Fragment } from 'react'

import { useNavigate } from 'react-router-dom'

import { ContextGlobalConsumer } from '../../context'

import { RightOutlined } from '@ant-design/icons'

import Error from '../../components/Common/Error'
import Loading from '../../components/Common/Loading'

import { GetList } from '../../components/Services/GetList'

import './style.scss'

export default function Home() {
	const { setMainTitle } = ContextGlobalConsumer()
	const navigate = useNavigate()
	const observer = useRef()
	const [isData, setData] = useState([])
	const [isPage, setPage] = useState(1)
	const [isLoading, setLoading] = useState(false)
	const [isMore, setMore] = useState(true)

	const handleGetList = async (type) => {
		setLoading(true)
		setMore(false)
		await GetList(type, isPage).then((response) => {
			if (response === false) setMore(null)
			if (response === undefined) setData(null)
			if (response) {
				setMore(true)
				setPage((prevPage) => prevPage + 1)
				setData((prevData) => {
					return [...new Set([...prevData, ...response])]
				})
			}
		})
		setLoading(false)
	}

	const handleLastElementRef = useCallback(
		(node) => {
			if (isLoading) return
			if (observer.current) observer.current.disconnect()
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && isMore) {
					handleGetList('people', isPage)
				}
			})
			if (node) observer.current.observe(node)
		},
		[isLoading, isMore, isPage]
	)

	const handleLinkToDetail = (item) => {
		const array = item.split('/')
		navigate(`/detail/${array[4]}/${array[5]}`)
	}

	useEffect(() => {
		setMainTitle('People of Star Wars')
		handleGetList('people', 1)
	}, [setMainTitle])

	if (isData === null) return <Error title={'People'} />

	return (
		<>
			{isData.map((item, index) => (
				<Fragment key={index}>
					{isData.length === index + 1 ? (
						<div className='sw-home-list-container' ref={handleLastElementRef} onClick={() => handleLinkToDetail(item.url)}>
							<div>
								<h3 className='sw-home-list-title'>{item.name}</h3>
								<h4 className='sw-home-list-description'>{item.specie}</h4>
							</div>
							<div className='sw-home-spacer' />
							<RightOutlined className='sw-home-list-icon' />
						</div>
					) : (
						<div className='sw-home-list-container' onClick={() => handleLinkToDetail(item.url)}>
							<div>
								<h3 className='sw-home-list-title'>{item.name}</h3>
								<h4 className='sw-home-list-description'>
									{item.specie} from {item.home}
								</h4>
							</div>
							<div className='sw-home-spacer' />
							<RightOutlined className='sw-home-list-icon' />
						</div>
					)}
				</Fragment>
			))}
			{isLoading && (
				<div className='sw-home-loading-container'>
					<Loading />
				</div>
			)}
		</>
	)
}
