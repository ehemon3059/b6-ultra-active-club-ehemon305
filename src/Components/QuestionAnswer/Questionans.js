import React from 'react';

const Ques = () => {
    return (
        <div>
            <div class="container border mt-5 mb-5 rounded text-center shadow ">
                <h1 class="mt-5 mb-5 text-success">Programmer Blog Site</h1>
            </div>

            <div className="container">
                <div class="card text-center">
                    <div class="card-header">
                    How does react work 
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Introduction to ReactJS</h5>
                        <p class="card-text">React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                        React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.</p>
               
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">How does it work </h5>
                        <p class="card-text">While building client-side apps, a team of Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                        Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
                        Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js. </p>
               
                    </div>
                    <div class="card-footer text-muted">
                    source :--  www.geeksforgeeks.org --
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div class="card text-center">
                    <div class="card-header">
                    Difference between state and props in React?
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Props</h5>
                        <p>1. Use props to pass data & event handlers down to your child components.</p>
                        <p>2. Props are immutable</p>
                        <p>3. which lets React do fast reference checks</p>
                        <p>4. are used to pass data down from your view-controller</p>
                        <p>5. your top level component</p>
                        <p>6. have better performance</p>
                        <p>7. use this to pass data to child components</p>
               
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">State</h5>
                        <p class="card-text">
                            <p>1. Use state to store the data your current page needs in your controller-view</p>
                            <p>2. should be managed in your view-controller</p>
                            <p>3. your top level component</p>
                            <p>4. is mutable</p>
                            <p>5. has worse performance</p>
                            <p>6. should not be accessed from child components</p>
                            <p>7. pass it down with props instead</p>
                            
                        </p>
               
                    </div>
                    <div class="card-footer text-muted">
                    source :-- stackoverflow.com --
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div class="card text-center">
                    <div class="card-header">
                    UseEffect react how many way to use
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">The useEffect Hook allows you to perform side effects in your components.</h5>
                        <h5 class="card-title">Some examples of side effects are: fetching data, directly updating the DOM, and timers.</h5>
                        <h5 class="card-title">useEffect accepts two arguments. The second argument is optional.</h5>
                
                        <p>1. No dependency passed:
                            useEffect(() => {
                            //Runs on every render
                            });</p>
                        <p>2. An empty array:
                        useEffect(() => {
                        //Runs only on the first render
                        }, []);</p>
                        <p>3. Props or state values:
                            useEffect(() => {
                            //Runs on the first render
                            //And any time any dependency value changes
                            }, [prop, state]);</p>
                        <p>4. So, to fix this issue, let's only run this effect on the initial render.</p>
                   
                   
               
                    </div>
                    <div class="card-footer text-muted">
                    source :-- www.w3schools.com --
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Ques;