import React from 'react'
import { Link } from 'react-router-dom'
import Ratting from '../Components/Ratting';

function ProductCards({ gridList, products }) {
    return (
        <div className={`shop-product-wrap  justify-content-center ${!gridList ? "row" : "col"}`}>
            {
                products.map((product, index) => (
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="product-item">
                            <div className="product-thumb">
                                <div className="pro-thumb">
                                    <img src={product.img} alt="" />
                                </div>
                                <div className="product-action-link">
                                    <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                                    <a href="#">
                                        <i className='icofont-heart'></i>
                                    </a>
                                    <Link to="/cart"><i className='icofont-cart-alt'></i></Link>
                                </div>
                            </div>
                            <div className="product-content">
                                <h5>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </h5>
                                <p className='productRating'>
                                    <Ratting />
                                </p>
                                <h6>$ {product.price}</h6>
                            </div>
                        </div>
                        {/*list style */}

                    </div>
                ))
            }
        </div>
    )
}

export default ProductCards