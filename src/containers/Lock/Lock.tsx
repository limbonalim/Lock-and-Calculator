import React from 'react';
import Display from '../../components/Display/Display';
import MemoButton from '../../components/Button/Button';
import './Lock.css';

const buttons: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '>', '0', 'E'];
const Lock = () => {


  const keyboard = buttons.map((item) => (
    <MemoButton
      key={item}
      value={item}
    />
  ));

  return (
    <div className="lock">
      <Display value="1"/>
      <div className="keyboard">
        {keyboard}
      </div>
    </div>
  );
};

export default Lock;