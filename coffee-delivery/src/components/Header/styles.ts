import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
   
   width: 100%;
   max-width:1120px;
   margin 0 auto;
   padding: 0 10rem;
   background: ${(props) => props.theme['base-background']};
   


   >div{

   display: flex;
   justify-content: space-between;
   align-items: center;
   
   }

`;

interface HeaderButtonProps {
    variant : 'purple' | 'yellow'
}

export const HeaderContainerButton = styled.button`
 display: flex;
 align-items: center;
 gap: 0.75rem;
 border: none;
 
`;

export const HeaderButton = styled.button<HeaderButtonProps>`
display: flex;

position: relative;
align-items: center;
justify-content: center;
gap: 4px;
min-width:2.3rem;
height: 2.3rem;
border: none;
border-radius: 6px;
padding 0 0.5rem;
font-size: 0.87rem;
cursor: pointer;


${(props) =>
    props.variant === 'purple' &&
    css`
      background: ${props.theme['brand-purple-light']};

      
    `}

    ${(props) =>
        props.variant === 'yellow' &&
        css`
          background: ${props.theme['brand-yellow-light']};
    
          
        `}

        &:hover {
            ${(props) =>
                props.variant === 'purple' &&
                css`
                  background: ${props.theme['brand-purple']};
            
                  
                `}

                ${(props) =>
                    props.variant === 'yellow' &&
                    css`
                      background: ${props.theme['brand-yellow']};
                
                      
                    `}
            transition: background-color 0.2s;
          }
`;
