import { IntroContainer, IntroContent } from './styles';
import introImg from '../../../assets/intro-img.svg';

export function Intro(){
    return(


        <IntroContainer>
             <IntroContent>
             <h1>Encontre o café perfeito para qualquer hora do dia</h1>

             <img src={introImg} alt="" />
        </IntroContent>

        </IntroContainer>

       
       
    )
}