import { CircleAccent, CircleCrimson, Container } from './styles'

const BackgroundCircles = () => {
   return (
      <Container>
         <CircleCrimson top="55%" left="65%"/>
         <CircleAccent top="70%" left="45%"/>

         <CircleCrimson top="-25%" left="0%"/>
         <CircleAccent top="-20%" left="-25%"/>

         <CircleAccent top="5%" left="85%"/>
      </Container>
   )
}

export default BackgroundCircles
