import React, { useState } from 'react'
import {registerUser} from '../redux/actions/index';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
function Register(props) {

const [user, setUser] = useState({email:"",username: "", password: "", confirmpassword:""})
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        props.dispatch(registerUser(user));
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter email"
                name="email"
                value={user.email}
                onChange={(e)=> setUser({...user , email: e.target.value} )}
                />
            </Form.Group>
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
            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="please confirm password"
                name="confirmpassword"
                value={user.confirmpassword}
                onChange={(e)=> setUser({...user , confirmpassword: e.target.value} )}
                />
            </Form.Group>
            <Button onClick={handleSubmit} variant="primary" type="submit">Register</Button>
        </Form>
    )
}
export default connect()(Register);