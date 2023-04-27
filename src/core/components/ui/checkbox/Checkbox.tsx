import { FC } from 'react'

import { Container, HiddenCheckbox, Icon, Label, StyledCheckbox } from './styles'
import { CheckboxProps } from './types'

export const Checkbox: FC<CheckboxProps> = ({ checked, children, ...props }) => {
   return (
      <Container>
         <Label>
            <HiddenCheckbox checked={checked} {...props} />
            <StyledCheckbox checked={checked}>
               <Icon viewBox="0 0 24 24">
                  <polyline points="20 6 9 17 4 12" />
               </Icon>
            </StyledCheckbox>
         </Label>
         {children}
      </Container>
   )
}

export default Checkbox
