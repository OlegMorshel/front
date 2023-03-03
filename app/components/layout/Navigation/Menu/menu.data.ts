import { IMenuSection } from './menu.interface'

export const commonMenu: IMenuSection = {
	title: 'Menu',
	items: [
		{ icon: 'MdHome', link: '/', title: 'Home' },
		{ icon: 'MdExplore', link: '/genres', title: 'Discovery' },
		{ icon: 'MdRefresh', link: '/fresh', title: 'Fresh movies' },
		{ icon: 'MdLocalFireDepartment', link: '/trending', title: 'Trending now' },
	],
}

export const userMenu: IMenuSection = {
	title: 'General',
	items: [],
}
