import React from 'react';
import './Button.css';
import {useDispatch} from 'react-redux';

interface Props {
  value: string;
  onClick: (value: string) => void;
}

const MemoButton: React.FC<Props> = React.memo(function Button({value, onClick}) {
  return (
    <button
      onClick={() => onClick(value)}
      className="button"
    >
      {value}
    </button>
  );
}, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});

export default MemoButton;