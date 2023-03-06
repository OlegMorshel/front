import { getGenreUrl } from '@config/url.config'
import { GenreService } from '@services/genre.service'
import { Queries } from '@shared/types'
import { useQuery } from 'react-query'
import { IMenuItem } from '../menu.interface'

export const useGenres = () => {
	const queryData = useQuery(Queries.GENRES, () => GenreService.getAll(), {
		select: ({ data }) =>
			data
				.map(
					(genre) =>
						({
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.name,
						} as IMenuItem)
				)
				.splice(0, 4),

		onError(error) {
			// error
		},
	})

	return queryData
}
