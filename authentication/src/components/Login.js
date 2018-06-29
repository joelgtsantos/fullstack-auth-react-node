import React from 'react';
import { Button } from 'react-bootstrap';

const Login = props => (
  <div>
    <h2>Foodie hub</h2>
    <Button onClick={props.auth.login}>Login</Button>
  </div>
);

export default Login;