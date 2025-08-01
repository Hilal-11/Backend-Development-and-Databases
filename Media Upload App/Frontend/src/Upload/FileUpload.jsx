import React from 'react'
import { useState  } from 'react'
import { useNavigate } from 'react-router-dom'
function FileUpload() {
  const navigate = useNavigate('')
  const [formData , setFormData] = useState({
    name: '',
    email: '',
    tag: '',
  })

  const URL = "http://localhost:3000/api/v1"  
  const imageFormats = ["jpg" , "png", "jpeg" , "webp"];
  const videoFormats = ["mp4" , "mov", "avi" , "webm"];
  // const imageReducerFormats = ["jpg" , "png", "jpeg" , "webp"];
  // const docsFormats = ["doc", "docx" , "txt" , "pdf"];


const handleFormChange = (event) => {
  const { name, value, type, files } = event.target;
  if (type === "file") {
    setFormData(prev => ({
      ...prev,
      file: files[0],
    }));
  } else {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }
};


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    const formDataToSend1 = new FormData();
    formDataToSend1.append('name', formData.name);
    formDataToSend1.append('tag', formData.tag);
    formDataToSend1.append('email', formData.email);
    formDataToSend1.append('imageFile', formData.file); 


    const formDataToSend2 = new FormData();
    formDataToSend2.append('name', formData.name);
    formDataToSend2.append('tag', formData.tag);
    formDataToSend2.append('email', formData.email);
    formDataToSend2.append('videoFile', formData.file);

    console.log(formDataToSend2)
    // POST Request 
    // for image Upload
    const getExtension = formData.file.name.split('.')[1].toLocaleLowerCase();
    console.log(getExtension)


    

    if(imageFormats.includes(getExtension)){
      try{
          const response = await fetch(`http://localhost:3000/api/v1/imageUpload`, {
          method: "POST",
          body: formDataToSend1
        })
          console.log(response);
          if(response.ok) {
            console.log("successfully image Upload on cludinary")
            navigate('/mediaUploadCloud')
          }
      }catch(error) {
        console.log(error.message)
      }
    }
    

    // for Video Upload

    if(videoFormats.includes(getExtension)){
      const response = await fetch(`${URL}/videoUpload` , {
        method: "POST",
        body: formDataToSend2
      })

      console.log(response)
      if(response.ok) {
        console.log("successfully Video Upload on cludinary")
        navigate('/videoUploadCloudinary')
      }
    }

    // if(imageReducerFormats.includes(getExtension)){
    //   const response = await fetch(`${URL}/imageReducerUplead` , {
    //     method: "POST",
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   })
    //   console.log(response)
    //   if(response.ok) {
    //     console.log("Successfully upload image on cloudinary")
    //   }
    // }
    

    // if(docsFormats.includes(getExtension)){
    //   const response = await fetch(`${URL}/docsUploadCloudinary` , {
    //     method: "POST",
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   })

    //   console.log(response);
    //   if(response.ok) {
    //     console.log("successfully Docs Upload on cloudinary")
    //   }
    // }


    setFormData({
      name: '',
      email: '',
      tag: '',
      fileUrl: '',
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
                    name="name"
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
                    name="tag"
                    value={formData.tag}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">File Upload</label>
                  <input
                    onChange={e => setFormData(prev => ({ ...prev, file: e.target.files[0] }))}
                    type="file"
                    name="file"
                    // value={formData.file}
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