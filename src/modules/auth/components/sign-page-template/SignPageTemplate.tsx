import Image from 'next/image'
import { FC } from 'react'

import ToggleTheme from '@/core/components/toggle-theme/ToggleTheme'
import NavLink from '@/core/components/ui/nav-link/NavLink'
import Anchor from '@/modules/auth/components/ui/anchor/Anchor'
import BackgroundCircles from '@/modules/auth/components/ui/background-circles/BackgroundCircles'

import { Center } from '@/core/styles/utils'

import welcomeLogo from './assets/welcome-logo.png'
import { Container, Left, Right, SignAnhor, ToggleWrapper } from './styles'
import { SignPageTemplateProps } from './types'

const SignPageTemplate: FC<SignPageTemplateProps> = ({ config, Form }) => (
   <Container>
      <Left>
         <Image
            width={1355}
            height={864}
            src={config.image}
            alt={`${config.linkText} Picture`}
            className="background-image"
            loading="eager"
         />
         <Image width={240} height={325} src={welcomeLogo} alt="Welcome Logo" className="welcome-logo" />
      </Left>

      <Right>
         <BackgroundCircles />
         <Center>
            <Form />
         </Center>
         <SignAnhor>
            {config.text}{' '}
            <NavLink to={config.linkUrl}>
               <Anchor>{config.linkText}</Anchor>
            </NavLink>
         </SignAnhor>
         <ToggleWrapper>
            <ToggleTheme />
         </ToggleWrapper>
      </Right>
   </Container>
)

export default SignPageTemplate
