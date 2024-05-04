import React, { useState } from 'react'
import { useAuth } from '../auth/AuthContext';
import { Container, Form, Button } from 'react-bootstrap';

export default function LoginPage() {

    const { loading, login, user } = useAuth()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        return <Navigate to="/" />;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login({
            username,
            password
        })
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
    )
}
