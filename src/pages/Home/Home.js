import React from 'react';

const Home = () => {
    return (
        <div className='container'>
            <div className='w-3/4 mx-auto'>
                <h1 className='text-3xl text-center font-bold uppercase'>I grow by helping people in need.</h1>
                <div className='w-1/2 bg-white border rounded-lg p-3.5 mx-auto my-7 relative'>
                    <input className='text-gray-500' type="text" placeholder='Search...' />
                    <button className='overflow-hidden text-white bg-blue-500 px-8 py-3.5 absolute right-0 top-0 rounded-r-lg'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Home;