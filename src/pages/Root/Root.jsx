import React from 'react';
import Header from '../../layout/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../layout/Footer';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Root;