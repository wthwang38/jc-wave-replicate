import React from 'react';
import NavigationBar from './NavigationBar';
import FrontPage from './FrontPage';
import About from './About';
import Pricing from './Pricing';
import Blog from './Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
let router = createBrowserRouter([
  {
    path:'/',
    element: <FrontPage/>,
    children:[
      {
        path:'/about',
        element: <About />,
      },
      {
        path:'/pricing',
        element: <Pricing />,
      },
      {
        path:'/blog',
        element: <Blog/>,
      }
    ],
  },
])
function App() {

  return (
    <>
      <NavigationBar/>
      <RouterProvider router={router}/>
      <Container><Outlet /></Container>
    </>
  )
}

export default App
