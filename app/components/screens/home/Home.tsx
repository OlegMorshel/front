import { FC } from 'react'

import Layout from '@components/layout/Layout'

import { IHome } from './home.interface'

export const Home: FC<IHome> = (props: IHome) => {
	return (
		<Layout>
			<h1>home page</h1>
		</Layout>
	)
}
