/** @format */

import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { ContextGlobalConsumer } from '../../context'

import Error from '../../components/Common/Error'
import Loading from '../../components/Common/Loading'

import { GetDetail } from '../../components/Services/GetDetail'

import './style.scss'

export default function Detail() {
	let params = useParams()
	const { setMainTitle } = ContextGlobalConsumer()
	const [isData, setData] = useState(null)
	const [isLoading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		GetDetail(params.type, params.id).then((response) => {
			if (response) {
				setMainTitle(response.name)
				setData(response)
				setLoading(false)
			}
		})
	}, [params.type, params.id, setMainTitle])

	if (isLoading) return <Loading />

	if (isData === null) return <Error title={'People'} />

	return (
		<div className='sw-detail-container'>
			<h3 className='sw-detail-title'>General information:</h3>
			<div className='sw-detail-description-container'>
				<h4 className='sw-detail-description-title'>Eye Color</h4>
				<div className='sw-detail-description-spacer' />
				<h4 className='sw-detail-description-subtitle'>{isData.eye_color}</h4>
			</div>
			<div className='sw-detail-description-container'>
				<h4 className='sw-detail-description-title'>Hair Color</h4>
				<div className='sw-detail-description-spacer' />
				<h4 className='sw-detail-description-subtitle'>{isData.hair_color}</h4>
			</div>
			<div className='sw-detail-description-container'>
				<h4 className='sw-detail-description-title'>Skin Color</h4>
				<div className='sw-detail-description-spacer' />
				<h4 className='sw-detail-description-subtitle'>{isData.skin_color}</h4>
			</div>
			<div className='sw-detail-description-container'>
				<h4 className='sw-detail-description-title'>Birth Year</h4>
				<div className='sw-detail-description-spacer' />
				<h4 className='sw-detail-description-subtitle'>{isData.birth_year}</h4>
			</div>
			<h3 className='sw-detail-vehicles-title'>Vehicles:</h3>
			{isData.vehicles_list.map((item, index) => (
				<h3 className='sw-detail-vehicles-list' key={index}>
					{item}
				</h3>
			))}
		</div>
	)
}
