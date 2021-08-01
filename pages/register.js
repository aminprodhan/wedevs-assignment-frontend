import { Form, Input, Button, Checkbox } from 'antd';
import ContainerPage from '~/components/layouts/ContainerPage';
import {loginSuccess } from '~/store/auth/action';
import React, {useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { setNotification } from '~/components/shared/Notification';
import AuthRepository from '~/repositories/AuthRepository';
import {useDispatch} from 'react-redux';
const Register = (props) => {
    const dispatch=useDispatch();
    const init={
        name:'',
        email:'',
        password:'',
    }
    const [loading,setLoading]=useState(false);
    const [loginData,setLoginData]=useState(init);
    const handleLoginSubmit = async(e) => {
        setLoading(true);
        const API = await AuthRepository.register(loginData);
        if(typeof API.error != 'undefined')
            {
                setNotification("warning",API.error);
                setLoading(false);
            }
        else{
            
            await dispatch(loginSuccess(API.user));
            setLoading(false);
            Router.push('/');
        }
    };
    const onFinishFailed = (errorInfo) => {
        
    };
    const onChange=(e)=>{
        setLoginData({
            ...loginData,
            [e.target.name]:e.target.value,
        });
    }
  return (
    <ContainerPage title="MyCrud">
        <div className="ps-page--my-account">
            <div className="ps-my-account">
                <div className="container">
                <Form
                        className="ps-form--account"
                        onFinish={handleLoginSubmit}
                        onFinishFailed={onFinishFailed}>
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Register New Account</h5>
                                <div className="form-group">
                                    <Form.Item
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your name!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            value={loginData.name}
                                            onChange={onChange}
                                            placeholder="Enter Name"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your email!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            name="email"
                                            value={loginData.email}
                                            onChange={onChange}
                                            placeholder="Email address"
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="password"
                                            name="password"
                                            onChange={onChange}
                                            value={loginData.password}
                                            placeholder="Password..."
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button
                                            htmlType="submit"
                                            style={{marginBottom:10}}
                                            key="submit" 
                                            type="primary" 
                                            loading={loading}
                                            >
                                                Submit
                                        </Button>
                                    </Form.Item>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </ContainerPage>
  );
};

export default Register;