import vectorGradientColor from '../../assets/Vector.png';
import { IntroContent } from './styles';

export function Intro(){
    return(
        <IntroContent>
             <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <img src={vectorGradientColor} alt="" />
        </IntroContent>
       
    )
}