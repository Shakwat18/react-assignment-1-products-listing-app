import Product from "./Product"


const Products =(props)=>{
const{products}= props
// console.log(products)
return(
    <div className="products">
      {products.map((product)=>{
    return(
           <Product key={product.id} id={product.id} img={product.image} title={product.title} description={product.description} price={product.price} rating={product.rating} category={product.category} />
    )
      })}
    </div>
)

}

export default Products