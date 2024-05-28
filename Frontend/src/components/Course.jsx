import React, { useEffect,useState } from 'react'
import axios from "axios"
import MyCard from './MyCard'
import {Link} from 'react-router-dom'
function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/books");
        console.log(res.data);
        console.log("inside course");
        setBook(res.data);
      } catch (error) {
        console.log("error ",error)
      }
    };
    getBook();
  },[]);
  return (
   <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl ">We're delighted to have you <span className="text-pink-500"> Here!:</span></h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam asperiores beatae minus iusto, ut quod necessitatibus dolores voluptas. Veniam aliquid est explicabo odit aperiam. Temporibus ipsam laudantium esse animi reprehenderit labore reiciendis neque eius nisi, impedit ipsa eum quidem natus!
        </p>
        <Link to="/">        
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 mt-6">Back
            </button>
        </Link>

      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
         book.map((item)=>(
          <MyCard key={item.id} item={item}></MyCard>
         ))
        }
      </div>
    </div>
   </>
  )
}

export default Course