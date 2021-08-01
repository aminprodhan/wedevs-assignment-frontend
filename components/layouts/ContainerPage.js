import React from 'react';
import Head from 'next/head';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
const ContainerPage = ({ children, title }) => {

    let titleView;
    if (title !== null) {
        titleView = process.env.title + ' | ' + title;
    } else {
        titleView = process.env.title + ' | ' + process.env.titleDescription;
    }

    return (
        <div className="wedevs">
            <Head>
                <title>{titleView}</title>
            </Head>
            <main id="homepage-1">{children}</main>
        </div>
    );
};

export default ContainerPage;
