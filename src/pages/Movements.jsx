import React from 'react';
import useFetch from '../hooks/useFetch';

function Movements() {

  const movements = useFetch();


  return (
    <>
    <h1>Movement</h1>
    <ul>
      {movements.length > 0 &&
        movements.map(movement => (
          <li key={movement.id}>
            <p>{movement.customDescription}</p>
          </li>
        ))}
    </ul>
    </>
  );
}

export default Movements;
