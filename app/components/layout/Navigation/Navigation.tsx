import Logo from './Logo'
import Menu from './Menu/Menu'
import styles from './Navigation.module.scss'

function Navigation() {
	return (
		<div className={styles.container}>
			<Logo />
			<Menu />
		</div>
	)
}

export default Navigation
