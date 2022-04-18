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
		.then(async (response) => {
			await Promise.all(
				response.data.results.map(async (item) => {
					await axios({
						metod: 'get',
						url: item.homeworld,
					}).then((res) => {
						item.home = res.data.name
					})
					if (item.species.length > 0) {
						await axios({
							metod: 'get',
							url: item.species[0],
						}).then((res) => {
							item.specie = res.data.name
						})
					} else {
						item.specie = 'human'
					}
				})
			)
			return response.data.results
		})
		.catch((error) => {
			if (error.response.data?.detail === 'Not found') return false
		})

	return data
}
