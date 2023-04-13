import brunetteWomanSittingImg from '@/modules/auth/assets/images/brunette-woman-sitting.png'
import womanBlackLingerieImg from '@/modules/auth/assets/images/woman-black-lingerie.png'

import { ERoutesPaths } from '@/config'

export const signInCopyright = {
   text: 'Don’t have an account?',
   linkText: 'Get started',
   linkUrl: ERoutesPaths.SIGN_UP,
   image: womanBlackLingerieImg
}

export const signUpCopyright = {
   text: 'Already have an account?',
   linkText: 'Sign In',
   linkUrl: ERoutesPaths.SIGN_IN,
   image: brunetteWomanSittingImg
}
