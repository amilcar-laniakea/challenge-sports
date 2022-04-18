/** @format */

import React, { useState, createContext, useContext } from 'react'

const AppContext = createContext()

export const ContextGlobalProvider = (props) => {
	const [isMainTitle, setMainTitle] = useState('People')

	const value = {
		isMainTitle,
		setMainTitle,
	}
	return <AppContext.Provider value={value} {...props} />
}

export const ContextGlobalConsumer = () => {
	const context = useContext(AppContext)
	if (!context) {
		throw new Error('ContextConsumer debe estar dentro de proveedor AppContext')
	}
	return context
}
