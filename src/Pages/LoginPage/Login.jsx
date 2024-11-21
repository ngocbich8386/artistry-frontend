import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Row, Col, Stack } from "react-bootstrap";
import './Login.css';
import { useNavigate } from 'react-router-dom'
import mylogo from '../../Components/Assets/Data/Logo.png'

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleRegisterPage = (e) => {
        e.preventDefault()

        navigate ('/register')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:5000/login',{
            email,
            password
        })

        .then( result => {
            console.log(result)
            if (result.data === "Success") {
                navigate ('/home-page')
            } else {
                if (result.data === "wrongpassword") {
                    alert("Sai mật khẩu")
                } else {
                    alert("Tài khoản với email đã nhập không tồn tại ")
                }
            }
        })
        .catch ( err => {
            console.log(err);
            alert("An error occurred. Please try again.")
        })
    }

    return (
        <div className="hi-login-container">
            <Form className="hi-login-form" onSubmit={handleSubmit} >
                <div className="hi-login-header">
                    <h2>ĐĂNG NHẬP</h2>
                    <p>Khởi nguồn chất sáng tạo trong bạn</p>
                </div>
                <Stack gap='2'>
                    <Row>
                        <Col xs='12'>
                            <Form.Group className="mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control className="hi-input-field2 ba" type="email" placeholder="abc@gmail.com" name="email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12'>
                            <Form.Group className="mb-3">
                                <Form.Label>Mật khẩu:</Form.Label>
                                <Form.Control className="hi-input-field2 ba" type="password" placeholder="Nhập mật khẩu" name="password" onChange={(e) => setPassword(e.target.value)}  />
                            </Form.Group>
                        </Col>
                    </Row>
                </Stack>

                <div className="hi-login-action">
                    <p className="hi-forgot-password">Quên mật khẩu?</p>
                    <Button className="hi-login-button" variant="warning" type="Submit" ><b>Đăng nhập</b></Button>
                    <p className="hi-login-footer">Chưa có tài khoản? <a href="/register" onClick={handleRegisterPage}>Đăng ký ngay</a></p>
                </div>
            </Form>
            <div className="hi-login-logo">
                <img src={mylogo}/>
            </div>
        </div>
    );
}

export default Login;
