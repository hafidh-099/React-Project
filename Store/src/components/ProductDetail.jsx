import React from 'react'

function ProductDetail({moreP}) {
    
  return moreP.map((e,index)=>(
            <article className={`product ${e.stock?"":"outOfStock"}`} key={index}>
                <img src={e.productImage} alt={e.productName} />
                <p>{e.productName}</p>
                <p>{e.productDescription}</p>
                <p>{e.productPrice}</p>
                <button>{e.stock?"Add to Cart":"out of stock"}</button>
            </article>
        ))
    
}

export default ProductDetail
