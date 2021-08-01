import React, { useState } from 'react';
import { Modal, Button } from 'antd';
const CustomModal=(props)=>{
    return(
          <Modal
            maskClosable = {false}
            visible={props.info.visible}
            title={props.info.modal_title}
            onOk={props.handleModalOk}
            onCancel={props.handleModalCancel}
            footer={[
              
              <Button key="submit" type="primary" 
                  loading={props.info.loading} onClick={props.handleModalOk}>
                  Submit
              </Button>,
              
            ]}
          >
              {props.children}
          </Modal>
    )
}
export default CustomModal;