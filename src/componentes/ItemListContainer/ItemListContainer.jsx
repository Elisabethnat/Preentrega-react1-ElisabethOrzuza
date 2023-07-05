import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);

  useEffect( () => {
    getProductos()
        .then(respuesta => setProductos(respuesta))
        .catch(error => console.log(error))
 
  }, [])
  
  return (
    
      <>
      <h3 className='text-center m-5'> {greeting}</h3>
      <ItemList productos={productos} />
      </>
     
  )
}

export default ItemListContainer