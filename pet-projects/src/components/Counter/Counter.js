import React, { useState } from 'react';
import './Counter.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  const onClickPlus = () => {
    setCount(count + 1);
  };

  const onClickMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="Counter">
      <h2>Счетчик:</h2>
      <h1>{count}</h1>
      <button onClick={onClickMinus} type="button" className="minus">- Минус</button>
      <button onClick={onClickPlus} type="button" className="plus">Плюс +</button>
    </div>
  );
}
