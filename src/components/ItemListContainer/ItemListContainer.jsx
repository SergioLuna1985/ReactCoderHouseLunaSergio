import React from 'react'

import './itemListContainer.css'

const ItemListContainer = ({saludo}) => {
  return (
    <div className='item-list-container'>
        <h2>{saludo}</h2>
    </div>
  )
}

export default ItemListContainer