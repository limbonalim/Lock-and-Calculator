import React, {useCallback, useEffect, useState} from 'react';
import './Display.css';

interface Props {
  value: string;
}

const Display: React.FC<Props> = ({value}) => {
  const [pin, setPin] = useState<string>('');
  const getHidingPin = useCallback(() => {
    let hidingPin = '';
    if (value.length) {
      for (let i = 0; i < value.length; i++) {
        hidingPin += '*';
      }
    }
    setPin(hidingPin);
  }, [value]);

  useEffect(() => {
    getHidingPin();
  }, [getHidingPin]);
  return (
    <div className="display">
      {pin}
    </div>
  );
};

export default Display;