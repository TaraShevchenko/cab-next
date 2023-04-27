import { signUpCopyright } from '@/modules/auth/components/sign-page-template/config'
import SignPageTemplate from '@/modules/auth/components/sign-page-template/SignPageTemplate'
import SignUpForm from '@/modules/auth/components/sign-up-form/SignUpForm'

const SignUpPage = () => {
   return <SignPageTemplate config={signUpCopyright} Form={SignUpForm} />
}

export default SignUpPage
