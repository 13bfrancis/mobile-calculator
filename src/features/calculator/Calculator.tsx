import { useDispatch } from "react-redux";

import {
  CalculatorButton,
  OperationButton,
  WideCalculatorButton,
} from "./CalculatorButton";
import { CalculatorContainer } from "./CalculatorContainer";
import {
  addNumber,
  clearCurrentNumber,
  resetCalculator,
  useTypedSelector,
} from "./calculatorSlice";

const Calculator = () => {
  const currentNumber = useTypedSelector((state) => state.currentResult);
  const dispatch = useDispatch();

  return (
    <CalculatorContainer>
      <div id="results">{currentNumber}</div>
      <CalculatorButton onClick={() => dispatch(resetCalculator())}>
        A/C
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(clearCurrentNumber())}>
        Clear
      </CalculatorButton>
      <WideCalculatorButton>History</WideCalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(1))}>
        1
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(2))}>
        2
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(3))}>
        3
      </CalculatorButton>
      <OperationButton>+</OperationButton>
      <CalculatorButton onClick={() => dispatch(addNumber(4))}>
        4
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(5))}>
        5
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(6))}>
        6
      </CalculatorButton>
      <OperationButton>-</OperationButton>
      <CalculatorButton onClick={() => dispatch(addNumber(7))}>
        7
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(8))}>
        8
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(9))}>
        9
      </CalculatorButton>
      <OperationButton>x</OperationButton>
      <CalculatorButton onClick={() => dispatch(addNumber(0))}>
        0
      </CalculatorButton>
      <WideCalculatorButton color="#ca3433">=</WideCalculatorButton>
      <OperationButton>/</OperationButton>
    </CalculatorContainer>
  );
};

export { Calculator };
