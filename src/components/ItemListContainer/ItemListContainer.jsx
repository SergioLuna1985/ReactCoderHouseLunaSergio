import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { idCategory } = useParams()

  useEffect(() => {
    getProducts()
      .then((data) => {
        if(idCategory){
          const filterProducts = data.filter( (product)=> product.category === idCategory )
          setProducts(filterProducts)
        }else{
          setProducts(data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
      
  }, [idCategory])


  return (
    <div className="itemlistcontainer">
      <ItemList products={products} />
    </div>
  )
}
export default ItemListContainer