
import React,{useState} from 'react';
import { Popconfirm, message } from 'antd';

const ConfirmAlert=({title,visible,handleOk,
    handleCancel,confirmLoading})=>{
        
    return (
        <Popconfirm
            title={title}
            visible={visible}
            onConfirm={handleOk}
            okButtonProps={{ loading: confirmLoading }}
            onCancel={handleCancel} />
    )
}
export default ConfirmAlert;