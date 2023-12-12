import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import MemoDisplay from '../../components/Display/Display';
import MemoButton from '../../components/Button/Button';
import {RootState} from '../../app/store';
import {add, check, refresh, remove} from './lockSlice';
import './Lock.css';


const buttons: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '>', '0', 'E'];
const Lock = () => {
  const [pin, setPin] = useState<string>('');
  const [style, setStyle] = useState<string[]>(['display']);
  const [showLink, setShowLink] = useState<boolean>(false);
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

  const getStyle = useCallback(async () => {
    if (lockValue.status === 1) {
      setStyle(prevState => {
        return [
          ...prevState,
          'open'
        ];
      });
      setShowLink(true);
    } else if (lockValue.status === 2) {
      setStyle(prevState => {
        return [
          ...prevState,
          'close'
        ];
      });
    }
    if (lockValue.status !== 0) {
      const stop = setInterval(() => {
        dispatch(check(true));
        setStyle(['display']);
        clearInterval(stop);
      }, 1000);
    }

  }, [lockValue.status, lockValue.value]);

  useEffect(() => {
    void getHidingPin();
    void getStyle();
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
    <>
      <div className="lock mb-3">
        <MemoDisplay
          value={pin}
          style={style}
        />
        <div className="keyboard">
          {keyboard}
        </div>
      </div>

      <Link
        style={showLink ? {display: 'block'} : {display: 'none'}}
        className="btn btn-outline-success"
        to="/calculator"
        onClick={dispatch(refresh())}
      >Go to Calculator
      </Link>
    </>
  );
};

export default Lock;