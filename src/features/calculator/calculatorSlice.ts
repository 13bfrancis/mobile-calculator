import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export enum OperationType {
  "add",
  "subtract",
  "divide",
  "multiply",
  "none",
}

export type CalculatorState = {
  currentResult: number;
  previousResult: number;
  operation: OperationType;
};

const initialState: CalculatorState = {
  currentResult: 0,
  previousResult: 0,
  operation: OperationType.none,
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    addNumber(state, action: PayloadAction<number>) {
      state.currentResult = parseFloat(
        `${state.currentResult}${action.payload}`
      );
    },
    clearCurrentNumber(state) {
      state.currentResult = 0;
    },
    resetCalculator(state) {
      state.currentResult = 0;
      state.previousResult = 0;
      state.operation = OperationType.none;
    },
  },
});

export const {
  addNumber,
  clearCurrentNumber,
  resetCalculator,
} = calculatorSlice.actions;

export const useTypedSelector: TypedUseSelectorHook<CalculatorState> = useSelector;

export default calculatorSlice.reducer;
