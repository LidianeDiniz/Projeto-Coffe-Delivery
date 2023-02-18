import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        :focus {
        outline: 0;
    }

        body{
            background: ${(props) => props.theme['base-background']};
            color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
        }



        body, input, textarea,  button {

            background-color: ${(props) => props.theme['base-background']};
           color: ${(props) => props.theme['base-text']};
          -webkit-font-smoothing: antialiased;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 1rem; 
    }    
    
    a{ 
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }

    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
    input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;

}

        

`
