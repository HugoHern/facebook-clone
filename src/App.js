

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {createBrowserRouter, RouterProvider, Route, Outlet} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import LeftBar from './components/leftbar/LeftBar';
import RightBar from './components/rightbar/RightBar';
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'



function App() {

  const Layout = () => {
    return(
      <div>
        <Navbar/>
        <div style={{display:'flex'}}>
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path:'/profile/:id',
          element: <Home />
        },
        {
          path:'/register',
          element: <Profile/>
        }
      ]
    },
    {
      path:'/login',
      element: <Login />
    },
    {
      path:'/register',
      element: <Register/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}/>

      </div>

  );
}

export default App;


//https://youtu.be/FweHcYHkt9A?t=1433