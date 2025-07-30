import React from "react"
import Navigation from "./components/Navigation"
import HoroComponent from "./components/HoroComponent"
import { SiCloudinary } from "react-icons/si";
function App() {
  return (
    <div className="w-full h-svh">
      <div>
        <Navigation />
      </div>
      <div>
        <HoroComponent/>
      </div>

      <div className="flex justify-center items-center">
        <button className=" cursor-pointer py-4 px-20 rounded-2xl shadow-sm shadow-slate-900 poppins-bold flex gap-4">Go to Media Upload <span className="text-2xl"><SiCloudinary/></span> </button>
      </div>
      <br /><br /><br />
    </div>
      
  )
}

export default App
