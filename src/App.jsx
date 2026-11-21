
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './assets/component/Home'
import Contact from './assets/component/Contact'
import Servies from './assets/component/Servies'
import About from './assets/component/About'
import Error from './assets/component/Error'
import WelcomeMsg from './assets/component/WelcomeMsg'
import Template from './assets/component/Template'

const App = () => {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Template/>,
      children:[
        
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/servies",
      element: <Servies />
    },
    {
      path:"/welcome/:userName",
      element:<WelcomeMsg/>
    },
    {
      path:"/*",
      element:<Error/>
    }
  
      ]
    }
    ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
