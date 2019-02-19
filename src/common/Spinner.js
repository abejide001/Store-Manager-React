import React from 'react';
import spinner from './spinner.gif';

export default function Spinner() {
  return (
    <div>
      <img src={spinner} style={{ width: '250px', margin: 'auto', display: 'block' }}/>
    </div>
  );
}
