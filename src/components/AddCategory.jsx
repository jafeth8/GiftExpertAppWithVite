import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({onNewValue}) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange=(event)=>{
    setInputValue(event.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(inputValue.trim().length<=1)return;
    onNewValue(inputValue.trim());
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit} aria-label='form'>
      <input
        type="text"
        placeholder="buscar gif"
        value={inputValue}
        onChange={(e)=>handleInputChange(e)}
      />
    </form>
  )

}

AddCategory.propTypes = {
  onNewValue: PropTypes.func.isRequired
}
