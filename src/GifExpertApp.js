import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['SpiderMan']);
    // const [categories, setCategories] = useState(['SpiderMan', 'God of War', 'The Blacklist']);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                { 
                    categories.map( category => 
                        // <li key={category}> {category} </li> 
                        <GifGrid key={category} category={category} />
                    ) 
                }
            </ol>
        </>
    )
}
