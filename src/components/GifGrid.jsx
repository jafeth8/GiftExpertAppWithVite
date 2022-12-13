
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';


export const GifGrid = ({category}) => {
 
 const {dataGifs,isLoading} = useFetchGifs(category);
  
  return (
    <>
        <h3>{category}</h3>

        { isLoading && <h2>cargando...</h2> }

        <div className='card-grid'>
          {
            dataGifs.map((gif)=>(
              <GifItem key={gif.id} {...gif}/>
            ))
          }
        </div>
    </>
  )
}
