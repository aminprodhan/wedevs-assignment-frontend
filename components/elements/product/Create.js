import React, { useState,useEffect } from 'react';
import {Input,ExclamationCircleOutlined,Modal,Button} from 'antd';
import CustomModal from '@/components/shared/modal/Modal';
import PicturesWall from '@/components/shared/PicturesWall';
import {useDispatch,useSelector} from 'react-redux';
import { setNotification } from '@/components/shared/Notification';
import ProductRepository from '~/repositories/ProductRepository';
import {getProductsSuccess} from '~/store/product/action';
const confirm = Modal.confirm;

const Create=(props)=>{
    const dispatch=useDispatch();
    const initState={
        visible:false,
        modal_title:'',
        loading:false,
        previewVisible:false,
        previewImage: "",
        image: [],
        title:'',
        price:'',
        description:'',
        product_id:0,
    };
    const [modalInfo,setModalInfo]=useState(initState);
    useEffect(() => {
        setModalInfo({
            ...modalInfo,
            visible:props.modalInfo.modalStatus,
            modal_title:props.modalInfo.title,
            title:props.modalInfo.item ? props.modalInfo.item.title:'',
            price:props.modalInfo.item ? props.modalInfo.item.price:'',
            description:props.modalInfo.item ? props.modalInfo.item.description:'',
            product_id:props.modalInfo.item ? props.modalInfo.item.id:0,
          });

    },[props.modalInfo.modalStatus]);  

    const handleModalCancel=()=>{
        setModalInfo({
          ...modalInfo,
          visible:false,
        });
        props.handleModalOpen(false);
      }
    const handleModalOk=()=>{

        if(modalInfo.title == ''){
            setNotification("error","Warning","Title is required!!!");
        }
        else if(modalInfo.price == '' || modalInfo.price <= 0){
            setNotification("error","Warning","Price is required!!!");
        }
        else{
            showConfirm();
        }
      }
    const handleUploadCancel=()=>{
          setModalInfo({
              ...modalInfo,
              previewVisible:false,
          });
          
      }
    const handleUploadPreview=(previewData)=>{
        setModalInfo({
              ...modalInfo,
              previewImage:previewData.previewImage,
              previewVisible:true,
          });
      }
    const handleRootImgUpload=(key,fileList)=>{
        setModalInfo({
              ...modalInfo,
              [key]:fileList,
          });
      }
    const onChange=(e,targetName,targetValue)=>{
          if(typeof targetName == 'undefined'){
                setModalInfo({
                    ...modalInfo,
                    [e.target.name]:e.target.value,
                });
            }
        else{
            setModalInfo({
                ...modalInfo,
                [targetName]:targetValue
            });
        }
      }
    const confirmHandleOk=async(callback)=>{
        setModalInfo({
            ...modalInfo,
            loading:true,
        });
        const API = await ProductRepository.save(modalInfo);
        if(typeof API.error != 'undefined')
            setNotification("warning",API.error);
        else{
            dispatch(getProductsSuccess(API));
            setNotification("success","success");
            setModalInfo({
                ...modalInfo,
                loading:false,
                visible:false,
            });
            props.handleModalOpen(false);
            callback();   
        }
    }
    function showConfirm() {
        confirm({
          title: modalInfo.product_id ? 'Do you want to update this item?' :'Are you sure to add this item?',
          okText: 'Submit',
          onOk() {
            return new Promise((resolve, reject) => 
            {
              confirmHandleOk(function(res){reject()});
            }).catch(() => console.log('Oops errors!'));
          },
          onCancel() {},
        });
      }  
    return(
        <>
            <CustomModal
                info={modalInfo}
                handleModalOk={handleModalOk}
                handleModalCancel={handleModalCancel}>
                <div className="d-flex flex-column justify-content-center">
                    <div className="p-1">
                        Title
                    </div>
                    <div className="p-1">
                        <Input 
                            onChange={onChange}
                            value={modalInfo.title} 
                            name="title" 
                            placeholder="Title" />
                    </div>
                    <div className="p-1">
                        Price
                    </div>
                    <div className="p-1">
                        <Input 
                            onChange={onChange}
                            value={modalInfo.price} 
                            name="price"
                            type="number" 
                            placeholder="Price" />
                    </div>
                    <div className="p-1">
                        Description
                    </div>
                    <div className="p-1">
                        <Input.TextArea 
                            onChange={onChange} 
                            name="description" 
                            placeholder="Description"
                            value={modalInfo.description}  
                        />
                    </div>
                    <div className="p-1">
                        <PicturesWall
                            handleUploadCancel={handleUploadCancel}
                            previewVisible={modalInfo.previewVisible}
                            previewImage={modalInfo.previewImage}
                            fileList={modalInfo.image}
                            maxCount={1}
                            ImageKey="image"
                            handleUploadPreview={handleUploadPreview} 
                            handleRootImgUpload={handleRootImgUpload} />
                    </div>
                </div>
            </CustomModal>
            
        </>
    )
}
export default Create;