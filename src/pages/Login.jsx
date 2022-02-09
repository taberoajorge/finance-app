import React from 'react';
import axios from 'axios';
import { Navigate } from 'react-router';

function Login() {
  const userdata = React.useRef(userdata);

  async function postDataUser(userData) {
    const {data} = await axios.post('https://api.finerio.mx/api/login', userData);
    sessionStorage.setItem('token', data.access_token);
  }

  React.useEffect(() => {
    postDataUser();
  }, []);

  const handleSubmit = e => {
    const formData = new FormData(userdata.current);
    const userData = {
      username: formData.get('email'),
      password: formData.get('password'),
    };

    e.preventDefault();
    postDataUser(userData);
    Navigate("/");
  };

  return (
    <form action="/" method="POST" ref={userdata} onSubmit={e => handleSubmit(e)}>
      <h1>Login</h1>
      <label htmlFor="email">
        <span> Email </span>
        <input type="email" name="email" placeholder="hi@example.com" />
      </label>
      <label htmlFor="email">
        <span> Password </span>
        <input type="password" name="password" placeholder="*****" />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
}

export default Login;
