import React from 'react';
import './Display.css';


interface Props {
  style?: string[];
  value: string;
}

const MemoDisplay: React.FC<Props> = React.memo(function Display({style, value}) {
  if (!style) {
    style = ['display'];
  }

  return (
    <div className={style.join(' ')}>
      {value}
    </div>
  );
}, (prevProps, nextProps) => {
  return (prevProps.value === nextProps.value) && (prevProps.style?.length === nextProps.style?.length);
});

export default MemoDisplay;