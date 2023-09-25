import React from 'react';
import NavigationBar from './NavigationBar';
import FrontPage from './FrontPage';
import About from './About';
import Pricing from './Pricing';
import Blog from './Blog';
import Rarity from './Rarity';
import SiteMap from './SiteMap';
import Accounting from './Accounting';
import HelpCenter from './HelpCenter';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
let router = createBrowserRouter([
  {
    path:'/',
    element: <FrontPage/>,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/rarity',
    element: <Rarity />,
  },
  {
    path: '/sitemap',
    element: <SiteMap />,
  },
  {
    path: '/accounting',
    element: <Accounting />,
  },
  {
    path: '/helpcenter',
    element: <HelpCenter />
  }
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
