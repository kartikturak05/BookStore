import React from 'react'
import Home from "./Home/Home"
import Courses from "./courses/Courses"
import Signup from './components/Signup'
import Login from './components/Login'
import { Toaster } from 'react-hot-toast';
import { useAuth } from '../src/context/AuthProvider';

import { Navigate, Route, Routes } from "react-router-dom"
function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (<>
  <div className='bg-white'>
      <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/course" element={authUser?<Courses></Courses>:<Navigate to={"/signup"}/>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      
    </Routes>
    <Toaster></Toaster>
    </div>
  </div>
    </> 

  )
}

export default App