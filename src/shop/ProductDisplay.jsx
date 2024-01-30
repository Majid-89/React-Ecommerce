import React from 'react'

function ProductDisplay({ item, index }) {
    console.log(item)
    const { name, id, price, seller, ratingsCount } = item
    return (
        <div className="col-lg-4 col-md-6 col-12">
        </div>
    )
}

export default ProductDisplay