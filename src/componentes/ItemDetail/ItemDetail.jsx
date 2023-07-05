import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula nisi, porta sed elit at, tempor rhoncus augue. Nunc quis eros enim.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail