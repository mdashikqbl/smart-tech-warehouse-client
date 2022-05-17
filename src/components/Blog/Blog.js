import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-text'>
            <h1 className='text-center'>Answer to the Question</h1>
            <div>
                <h3>Differences between sql and nosql databases ?</h3>
                <h5>
                    SQL- <br />
                    a ) SQL databases have fixed or static or predefined schema. <br />
                    b ) SQL databases are vertically scalable.	 <br />
                    c ) SQL databases are best suited for complex queries. <br />
                    NOSQL- <br />
                    a ) NoSQL databases have dynamic schema. <br />
                    b ) NoSQL databases are horizontally scalable.
                    <br />
                    c ) Javascript is capable enough to add HTML and play with the DOM.  <br />
                </h5>
            </div>
            <div>
                <h3>When should you use nodejs and when should you use mongodb ?</h3>
                <h5>
                    Nodejs- <br />
                    Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language .So, if i want to write some kind of stand-alone program or server in Javascript, then i can use nodejs for it. <br />


                    MongoDB- <br />
                    If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database
                    If my application needs the ability to persistently store data in a way that you can efficiently query or update it later, then i Use MongoDB or any Other Database
                </h5>
            </div>
            <div>
                <h3>Difference between javascript and nodejs ?</h3>
                <h5>
                    Javascript- <br />
                    a ) It is basically used on the client-side. <br />
                    b ) Javascript is used in frontend development.	 <br />
                    c ) SQL databases are best suited for complex queries. <br />
                    NodeJS- <br />
                    a ) It is mostly used on the server-side. <br />
                    b ) Nodejs is used in server-side development.
                    <br />
                    c ) Nodejs does not have capability to add HTML tags. <br />
                </h5>
            </div>


        </div>
    );
};

export default Blog;