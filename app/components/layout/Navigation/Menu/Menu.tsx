import { FC } from 'react'
import { commonMenu, userMenu } from './menu.data'
import MenuSection from './MenuSection/MenuSection'

import GenreMenu from './genres/GenreMenu'
import styles from './Menu.module.scss'

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<MenuSection section={commonMenu} />
			<GenreMenu />
			<MenuSection section={userMenu} />
		</div>
	)
}

export default Menu
