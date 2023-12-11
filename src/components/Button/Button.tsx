import React from 'react';
import './Button.css'

interface Props {
  value: string;
}

const MemoButton: React.FC<Props> = React.memo(function  Button ({value}) {
  return (
    <button className="button">
      {value}
    </button>
  );
}, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value
});

export default MemoButton;