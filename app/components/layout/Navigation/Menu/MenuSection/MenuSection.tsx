import { FC } from 'react'
import AuthItems from '../auth/AuthItems'
import { IMenuSection } from '../menu.interface'
import MenuItem from './MenuItem'
import styles from './MenuSection.module.scss'

type Props = {
	section: IMenuSection
}
const MenuSection: FC<Props> = ({ section: { items, title } }) => {
	return (
		<div className={styles.section}>
			<h4 className={styles.heading}>{title}</h4>
			<ul className={styles.list}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	)
}

export default MenuSection
