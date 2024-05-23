import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'
import list from "../../public/list.json"
function Courses() {
  console.log(list)
  return (
    <>
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen">
        <Course></Course>

        </div>
        <Footer></Footer>
    </div>
</>
  )
}

export default Courses