import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CounterListener = ({ defaultValue }) => {
  console.log('CounterListener initialized');

  const [count, setCount] = useState(Number(defaultValue || 0));

  useEffect(() => {
    if (defaultValue !== count && !Number.isNaN(defaultValue)) setCount(Number(defaultValue));
  }, [defaultValue]);

  useEffect(() => {
    window.addEventListener("counter.value", (event)=> {
      console.log('CounterListener received value', event.detail);
      setCount(Number(event.detail));
    });
  }, [count]);

  return (
    <>
      <div>
        Counter sent value:
        <b>{count}</b>
      </div>
    </>
  );
};

CounterListener.propTypes = {
  defaultValue: PropTypes.number.isRequired,
};

export default CounterListener;
