import React from "react"
import Navigation from "./components/Navigation"
import HoroComponent from "./components/HoroComponent"
import { Router , Route, useNavigate, Routes } from "react-router-dom"
import MediaUpload from "./components/MediaUpload";
function App() {
  
  return (
    <div className="w-full lg:w-[80%] h-svh">
      <div>
        <Navigation />
      </div>
    <Routes>
      <Route path="/" element={<HoroComponent/>} />
      <Route path="/mediaUploadCloud" element={<MediaUpload/>} />
    </Routes>
    </div>
      
  )
}

export default App
