import React, { useEffect } from 'react';
import Logo from '~/components/elements/common/Logo';
import { stickyHeader } from '~/utilities/common-helpers';
import UsersDropdown from './modules/UsersDropdown';

const HeaderDefault = () => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    return (
        <header
            className="header header--1"
            data-sticky="true"
            id="headerSticky">
            <div className="header__top">
                <div className="ps-container">
                    <div className="header__left">
                        <h2 style={{margin:0,padding:0}}>WeDevs</h2>
                    </div>
                    <div className="header__centers">
                        
                    </div>
                    <div className="header__right">
                        <UsersDropdown />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderDefault;
