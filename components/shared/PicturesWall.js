import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
import { Upload, Button,message,Modal} from 'antd';
import { UploadOutlined,PlusOutlined ,LoadingOutlined } from '@ant-design/icons';
import Image from 'next/image'


class  PicturesWall extends React.Component {

    constructor(props){
        super(props);
    }
   
    handleCancel = () => this.props.handleUploadCancel();
    handlePreview = file => {
        this.props.handleUploadPreview({
          previewImage: file.thumbUrl,
          previewVisible: true
        });
    };
  
    handleUpload = ({ fileList }) => {
      this.props.handleRootImgUpload(this.props.ImageKey,fileList);

    };

  
    render() {

      const { previewVisible, previewImage, fileList } = this.props;

      const uploadButton = (
        <div>
            <PlusOutlined />
            <div className="ant-upload-text">Upload</div>
        </div>
      );
      return (
        <div>
          <Upload
            //accept=".txt, .csv"
            listType="picture-card"
            fileList={fileList}
            maxCount={this.props.maxCount}
            onPreview={this.handlePreview}
            onChange={this.handleUpload}
            beforeUpload={file => {
              const reader = new FileReader();
      
              reader.onload = e => {
                  console.log(e.target.result);
              };
              reader.readAsText(file);
      
              // Prevent upload
              return false;
          }} // return false so that antd doesn't upload the picture right away
          >
            {uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            footer={null}
            onCancel={this.handleCancel}>
              <Image alt="example" style={{ width: "100%" }} src={previewImage} />
          </Modal>
        </div>
      );
    }
  }
  export default PicturesWall;