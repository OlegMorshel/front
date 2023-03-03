import { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

import Navigation from './Navigation/Navigation'
import Sidebar from './SideBar/Sidebar'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.middleContentWrapper}>{children}</div>
			<Sidebar />
		</div>
	)
}
