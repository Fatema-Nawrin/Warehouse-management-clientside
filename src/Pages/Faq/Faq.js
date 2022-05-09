import React from 'react';

const Faq = () => {
    return (
        <div>
            <div className='container' style={{ height: '100vh' }}>
                <h2 className='text-center my-5'>Frequently Asked Questions</h2>
                <h3 className='fw-bold mb-2'>Can I update items according to the stock?</h3>
                <p>If you are logged into the sytem , you can update stock item. You can increase, decrease or delete products quantity. But please be careful.</p>
                <h3 className='fw-bold my-3'>Can I add new items?</h3>
                <p>Yes, you can add new items that is not already in our inventory. You have to fill out the form first. You can also check your added products information in My items page.</p>
                <h3 className='fw-bold my-3'>Can I check which products are added by other user?</h3>
                <p>No, My Items page is user specific. You can not access this information.</p>
            </div>
        </div>
    );
};

export default Faq;