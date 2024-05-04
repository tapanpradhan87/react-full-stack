import React, { useEffect, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  //const history = useHistory();

  // useEffect(() => {
  //   validateToken();
  // }, [])

  // const validateToken = () => {
  //   if (token)
  //     history.push()
  // }

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password: password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }
      const jwtToken = await response.json();
      setToken(jwtToken['access_token'])
      localStorage.setItem('token', jwtToken['access_token']);
      console.log(await response.json())
      console.log('Login successful!');
    } catch (error) {
      setErrorMessage('Invalid username or password');
      console.error('Error logging in:', error);
    }
  };
  return (
    <Container>
      <h1>Login</h1>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>

    </Container>
  );
}