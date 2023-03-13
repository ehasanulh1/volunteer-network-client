import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Share/Header/Header';
import image1 from '../assets/images/top-image.png';
import './Main.css';

const Main = () => {
    return (
        <div style={{ maxWidth: '1440px' }} className='relative mx-auto'>

            <div className='top-img'>
                <img className='w-full' src={image1} alt="" />
            </div>
            <div className='absolute flex justify-center items-center top-0 inset-x-0'>
                <div style={{ minWidth: '1240px' }} >
                    <Header></Header>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;