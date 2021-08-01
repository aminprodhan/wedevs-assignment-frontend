import React, { useEffect,useState } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import { HomeOutlined, UserAddOutlined,LogoutOutlined,
    LoginOutlined,CoffeeOutlined } from '@ant-design/icons';
import { getSessionUser, logOutSuccess } from '~/store/auth/action';
import Router from 'next/router';
import {useDispatch,useSelector} from 'react-redux';

const { SubMenu,Item,ItemGroup } = Menu;
const UsersDropdown=(props)=>{
    const dispatch=useDispatch();
    const [current,setCurrent]=useState("");
    const user=getSessionUser();
    useEffect(()=>{
        process.browser && setCurrent(window.location.pathname);
    },[process.browser && window.location.pathname]);
    const handleLogout=async()=>{
         dispatch(logOutSuccess());
        Router.push("/login");
    }
    return(
        <Menu selectedKeys={[current]} mode="horizontal">
            <SubMenu 
            key="SubMenu" 
            icon={<UserAddOutlined />} 
            title={user?user.data.email:'Undefined'}
            className="float-right">
            <ItemGroup>
                <Item 
                    onClick={(e)=>handleLogout(e)} 
                    key="/logout" 
                    icon={<LogoutOutlined />}>
                        Logout
                </Item>
            </ItemGroup>
        </SubMenu>
        </Menu>
    )
}
export default UsersDropdown;