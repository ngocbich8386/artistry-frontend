import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Form, Row, Col, Stack } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import './Register.css';
import mylogo from '../../Components/Assets/Data/Logo.png'


const Register = () => {

    const [fullName, setFullName] = useState();
    const [birthDate, setBirthDate] = useState();
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState("");
    const navigate = useNavigate()


    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Mật khẩu nhập lại không khớp. Vui lòng kiểm tra lại.");
            return;
        }

        if (!fullName || !birthDate || !address || !email || !phone || !userName || !password) {
            setError("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        if (!email.includes('@')) {
            setError("Email không hợp lệ.");
            return;
        }

        if (phone.length !== 10) {
            setError("Số điện thoại phải có 10 chữ số.");
            return;
        }

        axios.post('http://localhost:5000/register', {
            fullName,
            birthDate,
            address,
            email,
            phone,
            userName,
            password
        })
        .then(result => console.log(result))
        .catch(err => console.log(err));
        navigate ('/login')
        // });
    };

    return ( 
        <div className="hi-register-container">
            <Form className="hi-register-form">
                <div className="hi-register-header">
                    <h2>TẠO TÀI KHOẢN MỚI</h2>
                    <p>Trở thành thành viên của cộng đồng yêu nghệ thuật</p>
                </div>
                <Stack gap='2'>
                    <Row>
                        <Col xs='6'>
                            <Form.Group className="mb-3">
                                <Form.Label>Họ và tên:</Form.Label>
                                <Form.Control className="hi-input-field hi-short-input"type="text" placeholder="Họ và tên" name="fullname" onChange={(e) => setFullName(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col xs='6'>
                            <Form.Group className="mb-3">
                                <Form.Label>Ngày sinh:</Form.Label>
                                <Form.Control className="hi-input-field hi-short-input" type="date" placeholder="dd/mm/yy" name="birthDate" onChange={(e) => setBirthDate(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12'>
                            <Form.Group className="mb-3">
                                <Form.Label>Địa chỉ:</Form.Label>
                                <Form.Control className="hi-input-field hi-short-input" type="text" placeholder="Địa chỉ" name="address" onChange={(e) => setAddress(e.target.value)}  />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='6'>
                            <Form.Group className="mb-3">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control className="hi-input-field hi-short-input" type="email" placeholder="email@gmail.com" name="email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                        </Col>
                        <Col xs='6'>
                            <Form.Group className="mb-3">
                                <Form.Label>Số điện thoại:</Form.Label>
                                <Form.Control className="hi-input-field hi-short-input" type="text" placeholder="000 000 0000" name="phone" onChange={(e) => setPhone(e.target.value)} />
                            </Form.Group>
                        </Col>
                    </Row>
                        
                        <Row>
                            <Col xs='11'>
                                <Form.Group style={{display: 'flex', justifyContent: 'space-between' , margin:'0.5rem 0'}} >
                                    <Form.Label>Tạo tên người dùng: </Form.Label>
                                    <Form.Control className="hi-input-field my-short-input" type="text" placeholder="user.name" name="userName" onChange={(e) => setUserName(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='11'>
                                <Form.Group style={{display: 'flex', justifyContent: 'space-between', margin:'0.5rem 0'}}>
                                    <Form.Label>Đặt mật khẩu:</Form.Label>
                                    <Form.Control className="hi-input-field my-short-input" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='11'>
                                <Form.Group style={{display: 'flex', justifyContent: 'space-between', margin:'0.5rem 0'}}>
                                    <Form.Label>Nhập lại mật khẩu:</Form.Label>
                                    <Form.Control className="hi-input-field my-short-input" type="password" onChange={handleConfirmPassword} />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Stack>

                    {error && <Alert variant="danger">{error}</Alert>}
    
                    <Button className="hi-register-button" variant="primary" type="Submit" onClick={handleRegister}>Đăng ký</Button>

                    <p className="hi-register-footer">Đã có tài khoản? <a href="/login">Đăng nhập</a></p>
                </Form>
                <div className="hi-login-logo">
                <img src={mylogo}/>
            </div>
            </div>
         );
    }
    
    export default Register;