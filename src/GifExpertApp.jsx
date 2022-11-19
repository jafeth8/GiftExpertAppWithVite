import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(["no game no life","mob psycho 100"]);

    const addCategory = (newValue)=>{
        console.log(newValue)
        
        if(categories.includes(newValue))return;

        setCategories([newValue,...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewValue={(value)=>{addCategory(value)}}/>
            
            <ol>
                {
                    categories.map((category)=>{
                        return <li key={category}>{category}</li>;
                    })
                }
            </ol>
            
        </>
    )
}
