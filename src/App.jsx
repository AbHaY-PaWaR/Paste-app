import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pastes from './components/Pastes'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        < Navbar />
      </div>
    },
    {
      path:"/home",
      element:
      <div>
         < Navbar />
        <Home />
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>
         < Navbar />
        <Pastes />
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
         < Navbar />
        <ViewPaste />
      </div>
    },

  ]
);

function App() {
 

  return (
   <div>
    <RouterProvider router={router} />
   </div>
  )
}

export default App
