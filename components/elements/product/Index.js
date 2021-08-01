import React,{useState} from 'react';
import { Button } from 'antd';
import List from '~/components/elements/product/List';
import Create from '~/components/elements/product/Create';

const Index=(props)=>{
    const [modalInfo,setModalInfo]=useState({
        display:'none',
        modalStatus:false,
        modalBranchStatus:false,
        title:'',
    
    });
    const handleModalOpen=(def=true)=>{
        setModalInfo({
            ...modalInfo,
            modalStatus:def,
            title:'Add New Product',
        });
      }
    return(
        <>
            <h1 className="text-center bg-primary">
                Products<br/>
            </h1>
            <div className="d-flex flex-row-reverse">
                <Button className="mr-5" onClick={() => handleModalOpen()} type="primary">
                    Create
                </Button>
            </div>
            <List />
            <Create 
                modalInfo={modalInfo}
                data={[]}
                defZoneVal={0}
                handleModalOpen={handleModalOpen}
            />
        </>
    )
}
export default Index;