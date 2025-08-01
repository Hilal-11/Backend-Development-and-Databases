import React from 'react'
import { RiImageAddFill } from "react-icons/ri";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { TiDocumentAdd } from "react-icons/ti";
import { FcAddImage } from "react-icons/fc";
import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { SiCloudinary } from "react-icons/si";

function HoroComponent() {
    const navigate = useNavigate('')
  return (
    <div className='lg:w-[100%] mx-auto py-10 lg:py-20 my-10'>
        <div>
            <div className='lg:text-center'>
                <h1 className='text-4xl lg:text-7xl poppins-extrabold px-6 text-shadow-sm text-shadow-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi rem optio fugiat.</h1>
                <p className='poppins-regular text-lg px-6 lg:px-32 py-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, neque dolore reiciendis explicabo ducimus ipsum optio eaque dignissimos quod quas voluptatum similique ratione incidunt aperiam perspiciatis consequatur dolorem dicta deleniti molestias sapiente earum inventore modi. Quidem culpa dicta animi ratione.</p>
            </div>
        </div>

        <div className='w-full flex flex-wrap justify-evenly h-auto px-6 gap-10 '>
            <div onClick={() => navigate('/fileUpload')} className='w-full lg:w-[300px] h-[300px] cursor-pointer rounded-2xl shadow-sm shadow-gray-500 p-4'>
                <div className='flex justify-center items-center text-[12rem] text-gray-700'>
                    <RiImageAddFill/>
                </div>
                <div className="flex justify-end items-center py-8 gap-4">
                    <h1 className='poppins-medium text-lg '>Image Upload</h1>
                    <span className='text-5xl text-blue-600'><CiCirclePlus /></span>
                </div>
            </div>
            <div onClick={() => navigate('/fileUpload')} className='w-full lg:w-[300px] h-[300px] cursor-pointer rounded-2xl shadow-sm shadow-gray-500 p-4'>
                <div className='flex justify-center items-center text-[12rem] text-gray-700'>
                    <AiOutlineVideoCameraAdd/>
                </div>
                <div className="flex justify-end items-center py-8 gap-4">
                    <h1 className='poppins-medium text-lg'>Video Upload</h1>
                    <span className='text-5xl text-blue-600'><CiCirclePlus /></span>
                </div>
            </div>
            <div onClick={() => navigate('/fileUpload')} className='w-full lg:w-[300px] h-[300px] cursor-pointer rounded-2xl shadow-sm shadow-gray-500 p-4'>
                <div className='flex justify-center items-center text-[12rem] text-gray-700'>
                    <FcAddImage/>
                </div>
                <div className="flex justify-end items-center py-8 gap-4">
                    <h1 className='poppins-medium text-lg'>Image Reducer Upload</h1>
                    <span className='text-5xl text-blue-600'><CiCirclePlus /></span>
                </div>
            </div>
            <div onClick={() => navigate('/fileUpload')} className='w-full lg:w-[300px] h-[300px] cursor-pointer rounded-2xl shadow-sm shadow-gray-500 p-4'>
                <div className='flex justify-center items-center text-[12rem] text-gray-700'>
                    <TiDocumentAdd/>
                </div>
                <div className="flex justify-end items-center py-8 gap-4">
                    <h1 className='poppins-medium text-lg'>Docs Upload</h1>
                    <span className='text-5xl text-blue-600'><CiCirclePlus /></span>
                </div>
            </div>
        </div>
    <br /> <br />
        <div className="flex justify-center items-center my-16">
                <button onClick={() => navigate('/mediaUploadCloud')} className=" cursor-pointer py-4 px-20 rounded-2xl shadow-sm shadow-slate-900 poppins-bold flex gap-4">Go to Media Upload <span className="text-2xl"><SiCloudinary/></span></button>
        </div>
    </div>
  )
}

export default HoroComponent