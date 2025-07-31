import React from 'react'
import { NavLink ,  Outlet } from 'react-router-dom'
function MediaUpload() {
  return (
    <div className="w-full my-20 lg:my-28 p-2 relative">

      <div className='text-center space-y-3'>
        <h1 className='poppins-bold text-3xl lg:text-6xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, assumenda.</h1>
        <p className='poppins-regular text-lg px-2 lg:w-1/2 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate, possimus deleniti error aperiam ab repellat! Quos accusamus eos</p>
      </div>

      <div className="px-3 my-6 flex lg:justify-evenly lg:overflow-hidden overflow-x-scroll shadow-sm shadow-slate-950 py-6 rounded-lg lg:rounded-full whitespace-nowrap">
        <div>
          <NavLink to={"imageUploadCloudinary"} 

          className={({ isActive }) =>
            `poppins-medium cursor-pointer hover:shadow-sm hover:shadow-slate-500 duration-500 px-5 lg:px-10 py-2 text-sm lg:text-lg rounded-full ${isActive ? "bg-blue-500 text-white" : ""}`}>
            
          Cloudinary Images</NavLink>
        </div>
        <div>
          <NavLink to={'videoUploadCloudinary'} className={( { isActive } ) => `poppins-medium cursor-pointer hover:shadow-sm hover:shadow-slate-500 duration-500 px-5 lg:px-10 py-2 text-sm lg:text-lg rounded-full ${isActive ? "bg-blue-500 text-white" : ""}`}
            
          >Cloudinary Videos</NavLink>
        </div>
        <div>
          <NavLink to={'imageReducerUploadCloudinary'} className={({isActive}) => 
            `poppins-medium cursor-pointer hover:shadow-sm hover:shadow-slate-500 duration-500 px-5 lg:px-10 py-2 text-sm lg:text-lg rounded-full ${isActive ? "bg-blue-500 text-white" : ""}`
          }>Cloudinary Reduced Images</NavLink>
        </div>
        <div>
          <NavLink to={'docsUploadCloudinary'} className={( {isActive} ) => 
            `poppins-medium cursor-pointer hover:shadow-sm hover:shadow-slate-500 duration-500 px-5 lg:px-10 py-2 text-sm lg:text-lg rounded-full ${isActive ? "bg-blue-500 text-white" : ""}`
          }>Cloudinary Docs</NavLink>
        </div>
      </div>
        <div className="mt-10">
          <Outlet />
        </div>
    </div>
  )
}
export default MediaUpload