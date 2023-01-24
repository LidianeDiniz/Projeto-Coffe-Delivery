import { IntroContainer, IntroContent, Subtitle, ImageContainer } from './styles';
import introImg from '../../../assets/intro-img.svg';

export function Intro(){
    return(


        <IntroContainer>
            <IntroContent>
           <div>
            <section>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <Subtitle>
            Com o Coffe Delivery você recebe seu café onde estiver, a <br />
            qualquer hora
          </Subtitle>
            </section>
           </div>
                        
             <ImageContainer src={introImg} alt="" />
            </IntroContent>
        </IntroContainer>

        

       
       
    )
}