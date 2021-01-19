import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = ()=> {

    // const categories = ['one punch', 'samurai', 'dragon ball' ]
    
    const [categories, setCategories] = useState(['dragon ball' ])


    // const handleAdd = ()=> {

    //     setCategories( [...categories, 'hunter'] )

    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr></hr>


            <ol>
                {
                    categories.map( (category) => {
                        return <GifGrid key={ category }  category={ category } />
                    })
                }
            </ol>

        </>)
  }