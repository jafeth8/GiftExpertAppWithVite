const key="NSrTGqaAgBGnvZ6BumZEIUMzlD2sCIuC";

export const getGifs=async(category)=>{

    const resp=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=10`)     
    const {data}=await resp.json()

    const gifs=data.map((gif)=>({
        id: gif.id,
        title: gif.title,
        url:gif.images.downsized_medium.url
    }))   
    return gifs;
}