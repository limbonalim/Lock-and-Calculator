import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import MemoDisplay from '../../components/Display/Display';
import MemoButton from '../../components/Button/Button';
import {RootState} from '../../app/store';
import {add, check, refresh, remove} from './lockSlice';
import './Lock.css';

const buttons: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '>', '0', 'E'];
const Lock = () => {
  const navigate = useNavigate();
  const lockValue = useSelector((state: RootState) => state.lock);
  const dispatch = useDispatch();

  const getStyle = useCallback(async () => {
    const stop = setInterval(() => {
      dispatch(check(true));
      clearInterval(stop);
    }, 1000);
  }, [lockValue.status, lockValue.value]);

  useEffect(() => {
    void getStyle();
  }, [getStyle]);

  useEffect(() => {
    if (lockValue.link) {
      const stop = setInterval(() => {
        navigate('/calculator');
        dispatch(refresh());
        clearInterval(stop);
      }, 1000);
    }
  }, [lockValue.link]);

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
          value={lockValue.pin.join('')}
          style={lockValue.style}
        />
        <div className="keyboard">
          {keyboard}
        </div>
      </div>
    </>
  );
};

export default Lock;