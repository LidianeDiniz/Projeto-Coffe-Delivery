import { Minus, Plus } from "phosphor-react";
import { ButtoncounterContainer, IconAdd } from './styles';

export function ButtonCounterActions(){
    return(
        <ButtoncounterContainer>
            <IconAdd>
            <Plus size={16} weight="bold"/>
            </IconAdd>
            <input type="number" value={1} onChange={ButtonCounterActions} /> 
            <IconAdd><Minus size={16} weight="bold"/></IconAdd>

        </ButtoncounterContainer>
    )
}