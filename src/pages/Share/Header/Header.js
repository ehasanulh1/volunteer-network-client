import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logos/Group 1329.png'

const Header = () => {
    const menuItems = <>
        <li><Link to="/" className='text-lg'>Home</Link></li>
        <li><a href='#about' className='text-lg'>About</a></li>
        <li><a href='#services' className='text-lg'>Services</a></li>
        <li><a href="#products" className='text-lg'>Products</a></li>
        <li><Link to="/" className='text-lg'>Blog</Link></li>
        <li><Link to="/" className='text-lg'>Contact</Link></li>
    </>
    return (
        <div style={{ maxWidth: '1280px' }} className="navbar mx-auto bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className='h-16' src={logo} alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                </ul>
            </div>
            <div className="navbar-end">
                <button className='rounded-md text-white py-3.5 px-12 bg-blue-500 mr-3'>Register</button>
                <button className='rounded-md text-white py-3.5 px-12 bg-gray-800'>Admin</button>
            </div>
        </div>
    );
};

export default Header;