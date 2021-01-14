import styled from "styled-components";

export const CalculatorContainer = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr repeat(5, 2fr);
  place-items: center;

  #results {
    font-size: 2rem;
    padding: 1.5rem;
    justify-self: end;
    align-self: center;
    grid-column: 1 / -1;
  }
`;
