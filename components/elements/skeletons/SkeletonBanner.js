import React from 'react';
import { Skeleton } from 'antd';

const SkeletonBanner = () => {
   
    return (
        <div className="">
            <Skeleton.Input active={true} className="def_banner_style" />
        </div>
    );
};

export default SkeletonBanner;