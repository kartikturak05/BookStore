import React from 'react'

function MyCard({ item }) {
  return (
    <>
      <div className='p-3 '>
        <div className="card w-92 bg-base-100 shadow-xl mt-4 my-3 cursor-pointer hover:scale-105 transition duration-200">
          <figure><img src={item.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-1 py-1 border border-[2px] rounded-xl hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCard



