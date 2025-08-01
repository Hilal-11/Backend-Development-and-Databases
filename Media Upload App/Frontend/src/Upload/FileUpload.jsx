import React from 'react'
import { useState , useEffect } from 'react'
function FileUpload() {

  const [formData , setFormData] = useState({
    username: '',
    email: '',
    tags: '',
    file: '',
  })

  const URL = "http://localhost/api/v1"  
  const imageFormats = ["jpg" , "png", "jpeg" , "webp"];
  const videoFormats = ["mp4" , "mov", "avi" , "webm"];
  const imageReducerFormats = ["jpg" , "png", "jpeg" , "webp"];
  const docsFormats = ["doc", "docx" , "txt" , "pdf"];

  const handleFormChange = (event) => {
    const { name , value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name] : value
    }))
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)

    // POST Request
    // for image Upload
    const getExtension = formData.file.split('.')[1].toLocaleLowerCase();
    if(imageFormats.includes(getExtension)){
      const response = await fetch(`${URL}/imageUploadCloudinary`, {
        method: "POST",
        headers: {
          'Content-Type': 'appliccation/json'
        },
        body: JSON.stringify(formData)
      })
      console.log(response);
      if(response.ok) {
        console.log("successfully image Upload on cludinary")
      }

    }
    

    // for Video Upload

    if(videoFormats.includes(getExtension)){
      const response = await fetch(`${URL}videoUploadCloudinary` , {
        method: "POST",
        headers: {
          'Content-Type': 'applicatio/json'
        },
        body: JSON.stringify(formData)
      })

      console.log(response)
      if(response.ok) {
        console.log("successfully Video Upload on cludinary")
      }
    }

    if(imageReducerFormats.includes(getExtension)){
      const response = await fetch(`${URL}/imageReducerUploadCloudinary` , {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      console.log(response)
      if(response.ok) {
        console.log("Successfully upload image on cloudinary")
      }
    }
    

    if(docsFormats.includes(getExtension)){
      const response = await fetch(`${URL}/docsUploadCloudinary` , {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      console.log(response);
      if(response.ok) {
        console.log("successfully Docs Upload on cloudinary")
      }
    }


    setFormData({
      username: '',
      email: '',
      tags: '',
      file: '',
    })
  }



  return (
    <div className='flex justify-center items-center w-full h-screen px-6'>
        <div className='w-full lg:w-2/3 h-[600px] shadow-sm shadow-slate-950 rounded-xl grid grid-cols-1 lg:grid-cols-2 '>
            <div className=''>
              <form onSubmit={handleFormSubmit} className="w-full h-full bg-white rounded-lg p-6 space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Username</label>
                  <input
                  onChange={handleFormChange}
                    type="text"
                    name="username"
                    value={formData.username}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                  onChange={handleFormChange}
                    type="email"
                    name="email"
                    value={formData.email}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Tags</label>
                  <input
                  onChange={handleFormChange}
                    type="text"
                    name="tags"
                    value={formData.tags}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">File Upload</label>
                  <input
                  onChange={handleFormChange}
                    type="file"
                    name="file"
                    value={formData.file}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className=" cursor-pointer w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-bold"
                >
                  Upload on Cloudinary
                </button>
              </form>
            </div>
            <div className=''>
              <img
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zvlevl5oyftaclozd3q6.png"
                alt="Cloudinary Preview"
                className="w-full h-full object-cover rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
  )
}

export default FileUpload