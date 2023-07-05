const misProductos = [
  { id: 1, nombre: "Camisa", precio: 500, img: "../img/camisa-gaspar.jpg",idCat"2" },
  { id: 2, nombre: "Remera", precio: 200, img: "../img/remeraninos.png",idCat"" },
  { id: 3, nombre: "Vestido", precio: 180, img: "../img/vestido.jpg",idCat"" },
  { id: 4, nombre: "Zapatos", precio: 900, img: "./img/zapatos-tacon.jpg",idCat"" },
]

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(misProductos);
    }, 2000)
  })
}

//Retornando 1 solo item
export const getUnProducto = (id) => {
   return new Promise(resolve => {
    setTimeout( () => {
      const producto = misProductos.find(prod=> prod.id ===id);
      resolve(producto);
    }, 2000)
   })
}