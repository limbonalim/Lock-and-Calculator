import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MemoDisplay from '../../components/Display/Display';
import MemoButton from '../../components/Button/Button';
import {RootState} from '../../app/store';
import {add, check, remove} from './lockSlice';
import './Lock.css';


const buttons: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '>', '0', 'E'];
const Lock = () => {
  const [pin, setPin] = useState<string>('');
  const [style, setStyle] = useState(['display']);
  const lockValue = useSelector((state: RootState) => state.lock);
  const dispatch = useDispatch();

  const getHidingPin = useCallback(() => {
    let hidingPin = '';
    if (lockValue.value.length) {
      for (let i = 0; i < lockValue.value.length; i++) {
        hidingPin += '*';
      }
    }
    setPin(hidingPin);
  }, [lockValue.value]);

  const getStyle = useCallback(() => {
    if (lockValue.status === 1) {
      setStyle(prevState => {
        return [
          ...prevState,
          'open'
        ];
      });
      dispatch(check(true));
    } else if (lockValue.status === 2) {
      setStyle(prevState => {
        return [
          ...prevState,
          'close'
        ];
      });
      dispatch(check(true));
    }
    if (lockValue.value.length < 4 || lockValue.value.length > 4) {
      setStyle(['display']);
    }
  }, [lockValue.status, lockValue.value]);

  useEffect(() => {
    getHidingPin();
    getStyle();
  }, [getHidingPin, getStyle]);

  const onClick = (value: string) => {
    switch (value) {
      case '>':
        dispatch(remove());
        break;
      case 'E':
        dispatch(check(false));
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
      <MemoDisplay
        value={pin}
        style={style}
        status={lockValue.status}
      />
      <div className="keyboard">
        {keyboard}
      </div>
    </div>
  );
};

export default Lock;