// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    const { data: images, loading} = useFetchGifs( category );



    // useEffect( ()=> {
    //     getGifs( category )
    //     .then( imgs => setImages( imgs ) )
    // }, [ category ])



    return (
        <>
            <h3> { category } </h3>

            { loading && <p>Loading...</p> }   
            {/* si loading es true hace lo otro */}

            <div className='card-grid' >
            
                {
                    images.map( (img)=> {
                        return <GifGridItem  key={ img.id } {...img} />
                    })
                }
                
            </div>
        </>
    )
}
