import styled from "styled-components";

export const CalculatorContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  place-items: center;

  #results {
    font-size: 3rem;
    padding: 2rem;
    justify-self: end;
    align-self: center;
    grid-column: 1 / -1;
  }
`;
