import { FC } from 'react'

import { StyledAnchor } from './styles'
import { AnchorProps } from './types'

const Anchor: FC<AnchorProps> = ({ children }) => {
   return <StyledAnchor>{children}</StyledAnchor>
}

export default Anchor
