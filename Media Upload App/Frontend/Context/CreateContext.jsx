import { createContext , useState , useEffect } from 'react'

export const AppContext = createContext()

export function AppContextProvider({ children }) {

    const [cloudinaryData , setCloudinaryData] = useState([])
    
useEffect(() => {
    fetchCloudinaryImages();
}, [])
const fetchCloudinaryImages = async () => {
    try{
      const response = await fetch('http://localhost:3000/api/v1/getMediaUploadCloudinaryData' , {
        method: 'GET',
        headers : {
          'Content-Type': 'application/json'
        },
      });
      const data = await response.json();
      setCloudinaryData(Array.isArray(data) ? data : data.data || []);
    }catch(error) {
      console.log(error)
    }
  }

const states = {
    cloudinaryData, setCloudinaryData,
}

return <AppContext.Provider value={ states }>
    {children}
</AppContext.Provider>

}   

