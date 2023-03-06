import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconName } from '@shared/types/icon.types'
import { FC } from 'react'

type Props = {
	name: TypeMaterialIconName
}

const MaterialIcon: FC<Props> = ({ name }) => {
	const IconComponent = MaterialIcons[name]
	return <IconComponent /> || MaterialIcons.Md10K
}

export default MaterialIcon
