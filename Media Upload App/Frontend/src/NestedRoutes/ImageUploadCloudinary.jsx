import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../Context/CreateContext'
function ImageUploadCloudinary() {

  const { cloudinaryData } = useContext(AppContext);


  return (
    <div className='grid grid-cols-2 gap-3 w-full lg:flex lg:flex-wrap justify-evenly lg:gap-6'>
      {
        cloudinaryData.map((item) => (
          <div className='lg:w-[360px] lg:h-[300px] rounded-lg bg-white shadow-sm shadow-slate-800 cursor-pointer'>
            <img className="w-full h-full rounded-lg" src={item.fileUrl} alt="Error" />
          </div>
        ))
      }
    </div>
  )
}

export default ImageUploadCloudinary
