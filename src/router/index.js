/** @format */

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Layout from '../components/Layout'

import Home from '../pages/home'
import NotFound from '../pages/not-found'

const Routers = () => (
	<Router>
		<Layout>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Layout>
	</Router>
)

export default Routers
