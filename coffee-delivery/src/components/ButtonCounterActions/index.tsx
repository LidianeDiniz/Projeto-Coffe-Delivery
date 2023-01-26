import { ButtoncounterContainer } from './styles';
export function ButtonCounterActions(){
    return(
        <ButtoncounterContainer>
            <button>-</button>
            <input type="number" value={1} />
            <button>+</button>
        </ButtoncounterContainer>
    )
}