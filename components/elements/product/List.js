import React,{useEffect,useState} from 'react';
import { Table, Tag, Space,Spin} from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import {getProducts, getProductsSuccess} from '~/store/product/action';
import Create from '~/components/elements/product/Create';
import { Button, Tooltip,Modal,Avatar } from 'antd';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import ProductRepository from '~/repositories/ProductRepository';
import { setNotification } from '~/components/shared/Notification';
import Image from 'next/image';
import { baseUrl, baseUrlApi } from '~/repositories/Repository';

const { Column, ColumnGroup } = Table;
const confirm = Modal.confirm;
const List=(props)=>{
    const dispatch=useDispatch();
    const [modalInfo,setModalInfo]=useState({
      display:'none',
      modalStatus:false,
      modalBranchStatus:false,
      title:'Open',
    });
    const state=useSelector(state => state.products);
    useEffect(() => {
      fetch();
    },[]);
    const fetch=async()=>{
       await dispatch(getProducts(""));
    }
    const handleModalOpen=(def=true,item)=>{
      setModalInfo({
          ...modalInfo,
          modalStatus:def,
          title:item ? "Update=>"+item.title : 'Update Item',
          item:item ? item : null,
      });
    }
    const confirmHandleOk=async(callback,item)=>{
      const API = await ProductRepository.delete(item);
      if(typeof API.error != 'undefined')
            setNotification("warning",API.error);
        else{
            dispatch(getProductsSuccess(API));
            setNotification("success","success");
            callback();   
        }
    }
    const handleDeleteConfirm=(item)=>{

        confirm({
          title: 'Do you want to delete these items?',
          okText: 'Submit',
          onOk() {
            return new Promise((resolve, reject) => 
            {
              confirmHandleOk(function(res){reject()},item);
            }).catch(() => console.log('Oops errors!'));
          },
          onCancel() {},
        });
    }
    
    let loadView;
    if(state.allProducts){
      loadView=(
        <Table dataSource={state.allProducts}>
            <Column title="Image" key="image" render={(text, record) => (
              <Avatar 
                  size="large"
                  maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                  src={`${baseUrl}/products/${record.image}`} />
            )} />
            <Column title="Title" dataIndex="title" key="title" />
            <Column title="Price" dataIndex="price" key="price" />
            <Column title="Description" dataIndex="description" key="description" />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <Space size="middle">
                  <Button onClick={()=>handleModalOpen(true,record)} 
                      type="primary" size="small" shape="round" icon={<EditOutlined />}>
                      Edit
                  </Button>
                  <Button onClick={()=>handleDeleteConfirm(record)} 
                      type="danger" size="small" shape="round" icon={<DeleteOutlined />}>
                      Delete
                  </Button>
                </Space>
              )}
            />
          </Table>
      );
    }
    else{
      loadView=(
          <span className="d-flex justify-content-center">
              <Spin size="small" />
          </span>
      );
    }
    return(
        <>
          <div className="container">
              {loadView}
          </div>
          <Create 
                modalInfo={modalInfo}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}
List.displayName = 'List';
export default List;