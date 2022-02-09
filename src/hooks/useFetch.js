import React from 'react';
import axios from 'axios';
const URL_API =
  'https://api.finerio.mx/api/users/f6d5e039-0b96-4c8e-b0cd-9d72c283e6e3/movements?deep=true&offset=0&max=10&includeCharges=true&includeDeposits=true&includeDuplicates=true';

function useFetch() {
  const [movements, setMovements] = React.useState([]);

  React.useEffect(async () => {
    let token = sessionStorage.getItem('token');

    await axios({
      url: URL_API,
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setMovements(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return movements;
}

export default useFetch;
