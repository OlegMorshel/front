import { FC } from 'react'
import MenuSection from '../MenuSection/MenuSection'
import { useGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
	const { isLoading, data } = useGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">Loading ...</div>
	) : (
		<MenuSection section={{ title: 'Popular genres', items: data ?? [] }} />
	)
}

export default GenreMenu
