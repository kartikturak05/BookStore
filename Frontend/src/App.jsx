import React from 'react'
import Home from "./Home/Home"
import Courses from "./courses/Courses"
import { Route, Routes } from "react-router-dom"
function App() {
  return (<>
  <div className='bg-white'>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/course" element={<Courses></Courses>}></Route>
    </Routes>

  </div>
    </>

  )
}

export default App