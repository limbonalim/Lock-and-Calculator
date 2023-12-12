import React from 'react';
import Display from '../../components/Display/Display';
import MemoButton from '../../components/Button/Button';
import './Lock.css';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {add} from './lockSlice';

const buttons: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '>', '0', 'E'];
const Lock = () => {
  const lockValue = useSelector((state: RootState) => state.lock.value);
  const dispatch = useDispatch();

  const onClick = (value: string) => {

    switch (value) {
      case '>':
        break;
      case 'E':
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
    <div className="lock">
      <Display value={lockValue}/>
      <div className="keyboard">
        {keyboard}
      </div>
    </div>
  );
};

export default Lock;