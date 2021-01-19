import React, { useState } from 'react'

import PropTypes from 'prop-types';



export const AddCategory = ( props ) => {   // se puede con props.categories o se pone ({categories}) 

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ) {            //.trim()  borra los espacios al principio y final
            
            props.setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('')
        }

    }

    return (
        
            <form onSubmit= { handleSubmit } >
                <input type='text' value={ inputValue } onChange={ handleInputChange } />

            </form>
        
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
