import React from 'react'
import { NavLink ,  Outlet } from 'react-router-dom'
function MediaUpload() {
  return (
    <div className="w-full my-20 p-5 relative">
      <div className="flex justify-evenly lg:overflow-hidden overflow-x-scroll shadow-sm shadow-slate-950 py-6 rounded-full">
        <div>
          <NavLink to={"imageUploadCloudinary"} 

          className={({ isActive }) =>
            `poppins-medium cursor-pointer hover:shadow-sm hover:shadow-slate-500 duration-500 px-10 py-2 text-lg rounded-full ${isActive ? "bg-blue-500 text-white" : ""}`}>
            
          Cloudinary Images</NavLink>
        </div>
        <div>
          <NavLink to={'videoUploadCloudinary'} className={( { isActive } ) => `poppins-medium cursor-pointer hover:shadow-sm hover:shadow-slate-500 duration-500 px-10 py-2 text-lg rounded-full ${isActive ? "bg-blue-500 text-white" : ""}`}
            
          >Cloudinary Videos</NavLink>
        </div>
        <div>
          <NavLink to={'imageReducerUploadCloudinary'} className={({isActive}) => 
            `poppins-medium cursor-pointer hover:shadow-sm hover:shadow-slate-500 duration-500 px-10 py-2 text-lg rounded-full ${isActive ? "bg-blue-500 text-white" : ""}`
          }>Cloudinary Reduced Images</NavLink>
        </div>
        <div>
          <NavLink to={'docsUploadCloudinary'} className={( {isActive} ) => 
            `poppins-medium cursor-pointer hover:shadow-sm hover:shadow-slate-500 duration-500 px-10 py-2 text-lg rounded-full ${isActive ? "bg-blue-500 text-white" : ""}`
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