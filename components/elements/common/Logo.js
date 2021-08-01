import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Logo = ({ type }) => {
    let data;
    if (type === 'autopart') 
    {
        data = {
            url: '/home/autopart',
            img: 'img/logo-autopart.png',
        };
    }
    else {
        data = {
            url: '/',
            img: '/static/img/logo/company_logo.png',
        };
    }
    return (
        <Link href={data.url}>
            <a className="ps-logo">
                <Image src={data.img} alt="" />
            </a>
        </Link>
    );
};

export default Logo;
