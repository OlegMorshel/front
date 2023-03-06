import { getGenresUrl } from '@config/api.config'
import { IGenre } from '@shared/types'
import { axiosClassic } from 'api/inteceptors'

export const GenreService = {
	async getAll(searchTherm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: {
				...(searchTherm && { searchTherm }),
			},
		})
	},
}
