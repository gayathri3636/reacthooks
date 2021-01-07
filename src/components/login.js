import React, { useState } from 'react'
import {loginUser} from '../redux/actions/index';
import {connect} from 'react-redux';
import { Form, Button } from 'react-bootstrap';
function Login(props) {

const [user, setUser] = useState({username: "", password: ""})
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user){
            props.dispatch(loginUser(user))
        }
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={user.username}
                onChange={(e)=> setUser({...user , username: e.target.value} )}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                value={user.password}
                onChange={(e)=> setUser({...user , password: e.target.value} )}
                />
            </Form.Group>
            <Button onClick={handleSubmit} variant="primary" type="submit">Login</Button>
        </Form>
    )
}
export default connect()(Login);