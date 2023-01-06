import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [dataGifs, setDataGifs] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const getImages= async ()=>{
      const images = await getGifs(category);
      setDataGifs(images)
      setIsLoading(false)
    }
    
    useEffect(() => {
      getImages();
    }, [])

    return {
      dataGifs,
      isLoading,
    }
}
