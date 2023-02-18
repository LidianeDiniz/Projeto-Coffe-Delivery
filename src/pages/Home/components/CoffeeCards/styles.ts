import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px 6px 36px;
  padding: 1.5rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;

  transition: transform 0.6s ease-in-out;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    border: 5px solid #d7d5d5;
    transform: scale(0.98);
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.5);

    img {
      width: 7.5rem;
      height: 7.5rem;
      margin-top: -1.25rem;
    }
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${(props) => props.theme['brand-yellow-light']};
    color: ${(props) => props.theme['brand-yellow-dark']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.62rem;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`

export const Name = styled.h4`
  color: ${(props) => props.theme['base-subtitle']};
  text-transform: uppercase;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.62rem;
  margin-botom: 0.5rem;
`

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: regular;
  font-size: 0.87rem;
  color: ${(props) => props.theme['base-label']};
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`

export const CardPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    strong {
      font-size: 1.5rem;
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      color: ${(props) => props.theme['base-text']};
      margin-bottom: 0.25rem;
    }

    span {
      border-bottom: -60rem;
      font-size: 0.75rem;
      font-family: 'Roboto', sans-serif;
      font-weigth: 400;
      color: ${(props) => props.theme['base-text']};
      line-height: 0.75rem;
    }
  }
`

export const CounterActions = styled.div`
  width: 7.5rem;
  gap: 0.5rem;

  > button {
    width: 2.3rem;
    height: 2.3rem;
    border: none;
    padding: 0.5rem;
    background: ${(props) => props.theme['brand-purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
    transition: filter 0.2s;

    transition: all .5s;
      border: 3px solid transparent;

    &:hover {
     border: 1px solid #d7d5d5;
    transform: scale(0.98);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);

   
  }
`
