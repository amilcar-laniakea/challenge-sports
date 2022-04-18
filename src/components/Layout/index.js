/** @format */

import React from 'react'

import { ContextGlobalProvider } from '../../context'

import Header from '../Common/Header'

const Layout = (props) => (
	<ContextGlobalProvider>
		<Header />
		{props.children}
	</ContextGlobalProvider>
)

export default Layout
