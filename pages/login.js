import { Form, Input, Button, Checkbox } from 'antd';
import ContainerPage from '~/components/layouts/ContainerPage';
import { login, loginSuccess } from '~/store/auth/action';
import React, { Component,useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { setNotification } from '~/components/shared/Notification';
import AuthRepository from '~/repositories/AuthRepository';
import {useDispatch,useSelector} from 'react-redux';

const Login = () => {
    const dispatch=useDispatch();
    const init={
        email:'',
        password:'',
    }
    const [loading,setLoading]=useState(false);
    const [loginData,setLoginData]=useState(init);
    const handleLoginSubmit = async(e) => {
        setLoading(true);
        const API = await AuthRepository.login(loginData);
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
                        onFinish={handleLoginSubmit}>
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
                                <h5>Log In Your Account</h5>
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
                                            style={{marginBottom:10}}
                                            key="submit" 
                                            htmlType="submit"
                                            type="primary" 
                                            loading={loading}>
                                                Login
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

export default Login;
