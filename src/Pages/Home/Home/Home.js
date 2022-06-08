import React from 'react';
import Banner from '../Banner/Banner';
import DataChart from '../DataChart/DataChart';
import Low from '../Low/Low';
import Products from '../Products/Products';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Low></Low>
            <DataChart></DataChart>
        </div>
    );
};

export default Home;