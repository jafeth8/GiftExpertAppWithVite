import { useState,useEffect } from 'react';
import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs'




export const GifGrid = ({category}) => {
  
  const [dataGif, setDataGif] = useState([])

  const getImages= async ()=>{
    const images = await getGifs(category);
    setDataGif(images);
  }

  useEffect(() => {
    getImages();
  }, [])
  
  return (
    <>
        <h3>{category}</h3>
        <div className='card-grid'>
          {
            dataGif.map((gif)=>(
              <GifItem key={gif.id} {...gif}/>
            ))
          }
        </div>
    </>
  )
}
