import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useProducts from '../../../Hooks/useProducts';
import './DataChart.css'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const DataChart = () => {

    const [products, setProducts] = useProducts();
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Products Chart',
            },
        },
    };
    const labels = [...products.map(product => product.name)]
    const datavalue = [...products.map(product => product.quantity)]

    const data = {
        labels,
        datasets: [
            {
                label: 'Stocked Products',
                backgroundColor: 'rgba(250, 134, 51, 0.7)',
                data: datavalue
            },]
    }

    return (
        <div className='chart-container'>
            <h1 className='text-center my-3'>Product Quantity Chart</h1>
            <h3 className='mt-4'>Check out which products are stocked in what quantity.</h3>
            <div style={{ height: '300', position: "relative", marginBottom: "5%", padding: "1%" }}>
                <Bar
                    options={options}
                    data={data}
                    height={250} />
            </div>



        </div>
    );
};

export default DataChart;