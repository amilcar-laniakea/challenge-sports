/** @format */

import axios from 'axios'

export const GetDetail = async (type, id) => {
	const data = await axios({
		method: 'get',
		url: `https://swapi.dev/api/${type}/${id}`,
	})
		.then(async (response) => {
			let vehiclesArray = []
			await Promise.all(
				response.data.vehicles.map(async (item) => {
					if (item) {
						await axios({
							metod: 'get',
							url: item,
						}).then((res) => {
							vehiclesArray.push(res.data.name)
						})
					} else {
						vehiclesArray.push('unknown')
					}
				})
			)
			response.data.vehicles_list = vehiclesArray
			return response.data
		})
		.catch((error) => {
			if (error.response.data?.detail === 'Not found') return false
		})

	return data
}
