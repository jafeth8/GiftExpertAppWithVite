import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(["elfen lied"]);

    const addCategory = (newValue)=>{
        console.log(newValue)
        
        if(categories.includes(newValue))return;

        setCategories([newValue,...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewValue={(value)=>{addCategory(value)}}/>

            {
                categories.map((category)=>{
                    return <GifGrid key={category} category={category}/>
                })
            }
         
        </>
    )
}
