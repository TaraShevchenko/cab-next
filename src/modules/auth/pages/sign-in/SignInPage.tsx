import SignInForm from '@/modules/auth/components/sign-in-form/SignInForm'
import { signInCopyright } from '@/modules/auth/components/sign-page-template/config'
import SignPageTemplate from '@/modules/auth/components/sign-page-template/SignPageTemplate'

const SignInPage = () => {
   return <SignPageTemplate config={signInCopyright} Form={SignInForm}/>
}


export default SignInPage
