/** @format */

import axios from 'axios'

export const GetDetail = async (type, id) => {
	const data = await axios({
		method: 'get',
		url: `https://swapi.dev/api/${type}/${id}`,
	})
		.then((response) => response.data)
		.catch((error) => {
			if (error.response.data?.detail === 'Not found') return false
		})

	return data
}
