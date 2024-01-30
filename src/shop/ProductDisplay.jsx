import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ProductDisplay({ item, index }) {
    const { name, id, price, seller, ratingsCount, quantity, img } = item
    const [preQuantity, setPreQuantity] = useState(quantity)
    const [coupon, setCoupon] = useState("")
    const [size, setSize] = useState("Set Size")
    const [color, setColor] = useState("Set Color")

    const incPrice = () => {
        setPreQuantity(preQuantity + 1)
    }
    const decPrice = () => {
        if (preQuantity > 1) {
            setPreQuantity(preQuantity - 1)
        }

    }
    const submitHandler = (e) => {
        e.preventDefault()
        const product = {
            img: img,
            id: id,
            name: name,
            quantity: preQuantity,
            coupon: coupon,
            size: size,
            color: color,
        }
        console.log(product)
    }

    return (
        <div>
            <div>
                <h4>{name}</h4>
                <p className='rating'>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span> {ratingsCount}Reviews</span>
                </p>
                <h4>$ {price}</h4>
                <h6>{seller}</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, commodi.</p>
            </div>

            <div>
                <form action="" onSubmit={submitHandler}>
                    <div className="select-product size">
                        <select value={size} onChange={(e) => setSize(e.target.value)}>
                            <option >Select size </option>
                            <option >SM</option>
                            <option >MD</option>
                            <option >LG</option>
                            <option >XL</option>
                            <option >XXL</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>
                    <div className="select-product color">
                        <select value={color} onChange={(e) => setColor(e.target.value)}>
                            <option >Select Color </option>
                            <option >Pink</option>
                            <option >Ash</option>
                            <option >Red</option>
                            <option >White</option>
                            <option >Blue</option>
                        </select>
                        <i className='icofont-rounded-down'></i>
                    </div>

                    <div className="cart-plus-minus">
                        <div className="dec qtybutton" onClick={decPrice}>-</div>
                        <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={preQuantity} onChange={(e) => setPreQuantity(parseInt(e.target.value, 10))} />
                        <div className="inc qtybutton" onClick={incPrice}>+</div>
                    </div>

                    <div className="discount-code mb-2">
                        <input type="text" placeholder='Enter Discount Code' onChange={(e) => setCoupon(e.target.value)} />
                    </div>

                    <button className='lab-btn text-light' type='submit'>
                        Add to Cart
                    </button>

                    <Link to="/cart" className='lab-btn bg-primary'>
                        <span>Checkout</span>
                    </Link>
                </form>
            </div >
        </div >
    )
}

export default ProductDisplay