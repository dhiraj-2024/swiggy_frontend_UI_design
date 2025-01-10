
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/Layout/AppLayout';

import './index.css';

import { Home } from './pages/Home';
import { Offer } from './pages/Offer';
import { Help } from './pages/Help';
import { Signin } from './pages/Signin';
import { Cart } from './pages/Cart';
import { Errorpage } from './pages/Errorpage';




function App() {

  const router = createBrowserRouter([
    {
      element:<AppLayout/>,
      errorElement:<Errorpage/>,
      children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'offer',
      element: <Offer />,
    },
    {
      path: 'help',
      element: <Help />,
    },
    {
      path: 'signin',
      element: <Signin />,
    },
    {
      path: 'cart',
      element: <Cart />,
    },

      ]
    }

  ])

  return (
 <RouterProvider router={router}>
  <Home/>
 </RouterProvider>
  );
}

export default App;
