import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5rem;
  gap: 2rem;
  width: 100%;
`;

export const TitleText = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-style: 800;
  font-size: 2rem;

  background: ${(props) => props.theme["base-background"]};
  color: ${(props) => props.theme["brand-yellow"]};
`;

export const SubtitleText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const SuccessDetailsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 33rem;
  gap: 2rem;
  padding: 2.5rem;
  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid transparent;

  .IconMap {
    background: ${(props) => props.theme["brand-purple"]};
  }

  .IconTimer {
    background: ${(props) => props.theme["brand-yellow"]};
  }

  .IconCurrency {
    background: ${(props) => props.theme["brand-yellow-dark"]};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: ${(props) => props.theme["base-white"]};
  transition: filter 0.2s;
  background: ${(props) => props.theme["base-background"]};
 
  
  &: hover {
    filter: brightness(0.8);
    transform: scale(1.2); 
    box-shadow: 0 2px 2px rgba(0,0,0,0.4);
  }
  
    
} 
`;

export const TextIcon = styled.p`

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;
  background: ${(props) => props.theme["base-background"]};
  color: ${(props) => props.theme["base-text"]};
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme["base-subtitle"]};   
  }    
`;


export const SubtitleTextIcon = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: ${(props) => props.theme["base-subtitle"]};
`;
