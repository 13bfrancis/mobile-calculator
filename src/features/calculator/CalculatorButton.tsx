import styled from "styled-components";

interface CalculatorButtonProps {
  color?: string;
}

export const CalculatorButton = styled.button<CalculatorButtonProps>`
  border: none;
  font-size: 2rem;
  background: ${(props) => props.color || "grey"};
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const WideCalculatorButton = styled(CalculatorButton)`
  grid-column-end: span 2;
`;

export const OperationButton = styled(CalculatorButton)`
  background: orange;
`;

export const ActionCalculatorButton = styled(CalculatorButton)`
  background: red;
`;
