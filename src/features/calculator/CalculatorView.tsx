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
  setOperation,
  useTypedSelector,
  OperationType,
  calculateValue,
} from "./calculatorSlice";

const CalculatorView = () => {
  const { currentResult } = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <CalculatorContainer>
      <div id="results">{currentResult}</div>
      <CalculatorButton onClick={() => dispatch(resetCalculator())}>
        A/C
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(clearCurrentNumber())}>
        Clear
      </CalculatorButton>
      <WideCalculatorButton>HIST</WideCalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(1))}>
        1
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(2))}>
        2
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(3))}>
        3
      </CalculatorButton>
      <OperationButton
        onClick={() => dispatch(setOperation(OperationType.add))}
      >
        +
      </OperationButton>
      <CalculatorButton onClick={() => dispatch(addNumber(4))}>
        4
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(5))}>
        5
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(6))}>
        6
      </CalculatorButton>
      <OperationButton
        onClick={() => dispatch(setOperation(OperationType.subtract))}
      >
        -
      </OperationButton>
      <CalculatorButton onClick={() => dispatch(addNumber(7))}>
        7
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(8))}>
        8
      </CalculatorButton>
      <CalculatorButton onClick={() => dispatch(addNumber(9))}>
        9
      </CalculatorButton>
      <OperationButton
        onClick={() => dispatch(setOperation(OperationType.multiply))}
      >
        x
      </OperationButton>
      <CalculatorButton onClick={() => dispatch(addNumber(0))}>
        0
      </CalculatorButton>
      <WideCalculatorButton
        onClick={() => dispatch(calculateValue())}
        color="#ca3433"
      >
        =
      </WideCalculatorButton>
      <OperationButton
        onClick={() => dispatch(setOperation(OperationType.divide))}
      >
        /
      </OperationButton>
    </CalculatorContainer>
  );
};

export { CalculatorView };
