import React from 'react';
import Banner from '../Banner/Banner';
import Low from '../Low/Low';
import Products from '../Products/Products';
import Stock from '../Stock/Stock';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Low></Low>
            <Stock></Stock>
        </div>
    );
};

export default Home;