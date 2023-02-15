import { CoffeeList } from "./components/CoffeeList";
import { Intro } from "./components/Intro";
import { HomeConatiner } from "./styles";

export function HomePage(){
      return(
        <HomeConatiner>        
        <Intro/>
        <CoffeeList/>      
       </HomeConatiner>
    )
}