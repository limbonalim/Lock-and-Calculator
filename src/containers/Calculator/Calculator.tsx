import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MemoDisplay from '../../components/Display/Display';
import MemoButton from '../../components/Button/Button';
import {RootState} from '../../app/store';
import {add, remove, equal, plus, minus, multiply, divide} from './calculatorSlice';
import './Calculator.css';


const buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '>', '0', '=', '+'];
const Calculator = () => {
  const value = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();
  const onClick = (value: string) => {
    switch (value) {
      case '>':
        dispatch(remove());
        break;
      case '=':
        dispatch(equal());
        break;
      case '+':
        dispatch(plus());
        break;
      case '-':
        dispatch(minus());
        break;
      case '*':
        dispatch(multiply());
        break;
      case '/':
        dispatch(divide());
        break;
      default:
        dispatch(add(value));
    }
  };

  const keyboard = buttons.map((item) => (
    <MemoButton
      key={item}
      value={item}
      onClick={onClick}
    />
  ));

  return (
    <div className="calculator">
      <MemoDisplay
        value={value.show}
      />
      <div className="keyboard">
        {keyboard}
      </div>
    </div>
  );
};

export default Calculator;