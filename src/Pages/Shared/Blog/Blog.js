import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className='row  d-flex justify-content-center'>
                <div className='col-md-4 col-lg-12 mt-5'>
                    <h2 style={{ fontSize: "20px" }} className=' text-muted'>
                        <span className='text-danger text-small'>No.1/will you improve the performance of a React Application?: </span><br />How
                        A modern front-end library like React doesn't magically make your app faster. It requires the developer to understand how React works and how the components live through the various phases of the component lifecycle.Users interact with the UI and cause the data to change. Whether the interaction involves clicking a button, tapping on an image, dragging list items around, AJAX requests invoking APIs, etc., all those interactions only change the data. They never cause the UI to change directly.</h2>

                    <br />
                    <br />

                    <h2 style={{ fontSize: "20px" }} className='text-muted '>
                        <span className='text-danger '>No.2/What are the different ways to manage a state in a React application?: </span><br />
                        The state is just a fancy term for a JavaScript data structure. If a user changes state by interacting with your application, the UI may look completely different afterwards, because it's represented by this new state rather than the old state.Hooks are backwards-compatible, which means it doesn't keep any breaking changes. React provides some built-in Hooks like useState, UseEffect and useReducer etc. You can also make custom hooks.</h2>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "20px" }} className=' text-muted '>
                        <span className='text-danger '>No.3/How does prototypical inheritance work?:
                        </span><br />
                        For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.Actually a super-important thing, because we may have a big object with many methods, and have objects that inherit from it. And when the inheriting objects run the inherited methods, they will modify only their own states, not the state of the big object.</h2>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "20px" }} className=' text-muted '>
                        <span className='text-danger '>No.4/  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?:
                        </span><br />
                        You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                        Create two extra space, i.e. two extra arrays to store the product of all the array elements from start, up to that index and another array to store the product of all the array elements from the end of the array to that index.To get the product excluding that index, multiply the prefix product up to index i-1 with the suffix product up to index i+1.Create an array product and initialize its value to 1 and a variable temp = 1.initialize temp = 1 and traverse the array from last index to start.</h2>
                    <br />
                    <br />
                    <h2 style={{ fontSize: "20px" }} className=' text-muted '>
                        <span className='text-danger '>No.5/What is a unit test? Why should write unit tests?:
                        </span><br />
                        Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</h2>
                </div>
            </div>
        </div>
    );
};

export default Blog;