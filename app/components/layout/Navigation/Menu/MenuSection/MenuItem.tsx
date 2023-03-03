import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { IMenuItem } from '../menu.interface'

import MaterialIcon from '@components/ui/MaterialIcon'
import Link from 'next/link'
import styles from './MenuSection.module.scss'

type Props = {
	item: IMenuItem
}

const MenuItem: FC<Props> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<li
			className={cn(styles.menuItem, {
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<MaterialIcon name={item.icon} />
				<span className={styles.title}>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
