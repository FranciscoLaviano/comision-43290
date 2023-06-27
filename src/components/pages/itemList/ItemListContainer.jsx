import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      // reject("salio todo mal")
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));

    // .finally(()=>console.log("hola"))
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;

// useEffect( (

//   const obtenerInfo = async ()=>{
//     const tarea = fetch("dasdasdasdasda")
//     let res = await tarea
//     setItems(res)
//   }
//   obtenerInfo()

// )=> , [ ])
