import React from 'react';
import './Display.css';

interface Props {
  value: string;
}

const Display: React.FC<Props> = ({value}) => {
  return (
    <div className="display">
      {value}
    </div>
  );
};

export default Display;