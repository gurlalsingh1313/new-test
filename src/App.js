import React from 'react';
import { Router, Route, Switch, Link, Routes, createBrowserRouter, RouterProvider} from 'react-router-dom';
import MyComponent from './home';
import MyComponent1 from './page1.js'
import MyComponent2 from './page2.js'
import MyComponent3 from './page3.js';


const App = () => {
    const router = createBrowserRouter([
      {
        path:"/",
        element:<MyComponent />
      },
      {
        path:"page1",
        element:<MyComponent1 />
      },
      {
        path:"page2",
        element:<MyComponent2 />
      },
      {
        path:"page3",
        element:<MyComponent3 />
      },
    ])
    return (
        <>
        <RouterProvider router={router} />
        </>
    );
};

export default App;
