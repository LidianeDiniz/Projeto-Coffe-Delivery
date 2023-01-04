import styled from "styled-components";

export const HeaderContainer = styled.header`
   
   width: 100%;
   max-width:1120px;
   margin 0 auto;
   padding: 0 1.6rem;

   >div{

   display: flex;
   justify-content: space-between;
   align-items: center;
   }

`;

export const HeaderContainerButton = styled.button`
 display: flex;
 align-items: center;
 gap: 0.75rem;
`;

export const HeaderButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
gap: 4px;
min-width:2.3rem;
height: 2.3rem;
border-radius: 6px;
padding 0 0.5rem;
font-size: 0.87rem;

`;
