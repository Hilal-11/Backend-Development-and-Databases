import React from "react"
import Navigation from "./components/Navigation"
import HoroComponent from "./components/HoroComponent"
import { Router , Route, Routes } from "react-router-dom"
import MediaUpload from "./components/MediaUpload";

import MediaUploadAll from './NestedRoutes/MediaUploadAll'
import ImageUploadCloudinary from './NestedRoutes/ImageUploadCloudinary'
import VideoUploadCloudinary from './NestedRoutes/VideoUploadCloudinary'
import ImageReducerUploadCloudinary from './NestedRoutes/ImageReducerUploadCloudinary'
import DocsUploadCloudinary from './NestedRoutes/DocsUploadCloudinary'

function App() {
  
  return (
    <div className="w-full lg:w-[80%] h-svh mx-auto">
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HoroComponent />} />
        <Route path="/mediaUploadCloud" element={<MediaUpload />}>
          <Route index element={<MediaUploadAll />} />
          <Route path="imageUploadCloudinary" element={<ImageUploadCloudinary />} />
          <Route path="videoUploadCloudinary" element={<VideoUploadCloudinary />} />
          <Route path="imageReducerUploadCloudinary" element={<ImageReducerUploadCloudinary />} />
          <Route path="docsUploadCloudinary" element={<DocsUploadCloudinary />} />
        </Route>
      </Routes>
    </div>
      
  )
}

export default App
