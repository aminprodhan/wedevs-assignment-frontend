
import { Table, Input, InputNumber,
    Popconfirm, Form, Typography,Select,Radio,notification    } from 'antd';
import { Button } from 'antd';
export const setNotification=(type="success",title="",des="")=>{
    notification[type]({
        message: title,
        description:des,
        onClick: () => {
          //console.log('Notification Clicked!');
        },
      });
}