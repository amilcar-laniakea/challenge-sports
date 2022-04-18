/** @format */

import axios from 'axios'

export const GetList = async (type, page) => {
	const data = await axios({
		method: 'get',
		url: `https://swapi.dev/api/${type}`,
		params: {
			page: page,
		},
	})
		.then((response) => response.data.results)
		.catch((error) => {
			if (error.response.data?.detail === 'Not found') return false
		})

	return data
}
