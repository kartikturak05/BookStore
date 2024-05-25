import React from 'react'
import Home from "./Home/Home"
import Courses from "./courses/Courses"
import { Route, Routes } from "react-router-dom"
function App() {
  return (<>
  <div className='bg-white'>
      <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/course" element={<Courses></Courses>}></Route>
    </Routes>
    </div>
  </div>
    </> 

  )
}

export default App