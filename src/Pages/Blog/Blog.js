import React from 'react';

const Blog = () => {
    return (
        <div className='w-75 mx-auto mb-5'>
            <h1 className='text-center my-4'>Questions and Answers</h1>
            <h3>Differences between Javascript and Nodejs</h3>
            <p>Javascript is a interpreted scripting programming language and on the other hand Nodejs is a runtime environment for Javascript.
                Javascript is used for client side activity mostly but Nodejs is used for server side generally. HTML tags can be added in javascript which is not possible in Nodejs.
                Javascript can only run in browsers that supports javascript engine but with the help of Nodejs, it can run outside of browser.
            </p>
            <h3>When should you use Nodejs and when should you use Mongodb?</h3>
            <p>MongoDB is a nosql database program and it is used to store data efficiently.There are many database program but it depends on the project what needed to be used. If a project needs to extract or update data frequently, then MongoDB can be used.</p>
            <p>Nodejs is a runtime environment for javascript so in case of a project built with javascript, Nodejs is used. Also, Mongodb has api library so, Nodejs can do CRUD operation on database in Mongodb to update the data according to the project.</p>
            <h3>Differences between sql and nosql databases.</h3>
            <p>Sql databases are vertically scalable but nosqL databases are horizontally scalable. Sql databases are relational but nosql databses are not. In sql database, data is in table with fixed row and column but nosql is in key-value pairs mostly. Sql is rigid but nosql is fixable.
                Query is faster in nosql rather than in sql because in sql, data are joined in between multiple tables.
            </p>
        </div>
    );
};

export default Blog;