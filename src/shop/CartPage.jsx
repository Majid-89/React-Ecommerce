import React, { useEffect, useState } from 'react'
import PageBanner from '../Components/PageBanner'
import { Link } from 'react-router-dom'
import delImgUrl from "../assets/images/shop/del.png"

function CartPage() {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || []
        setCartItems(existingCart)
    }, [])

    const totalPrice = (item) => {
        return item.quantity * item.price
    }

    const handleIncrease = (item) => {
        item.quantity++
        setCartItems([...cartItems])

        //update local storage with new cart Items//
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity--
            setCartItems([...cartItems])
        }
        //update local storage with new cart Items//
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }
    const handleRemoveItem = (item) => {
        const updatedCart = cartItems.filter((cartItems) => cartItems.id.toString() !== item.id.toString())
        setCartItems(updatedCart)
        updateLocalStorage(updatedCart)
    }
    const updateLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const cartSubtotal = cartItems.reduce((acc, item) => {
        return acc + totalPrice(item)
    }, 0)

    const orderTotal = cartSubtotal

    return (
        <>
            <PageBanner title={"Shop Cart"} link="/cart" />
            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        {cartItems.length ?
                            <div className="cart-top">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='cat-product'>Product</th>
                                            <th className='cat-price'>Price</th>
                                            <th className='cat-quantity'>Quantity</th>
                                            <th className='cat-total'>Total</th>
                                            <th className='cat-edit'>Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item, index) => (
                                            <tr key={index}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to='/shop'><img src={item.img} alt="" /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to=''>{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>$ {item.price}</td>
                                                <td className='cat-quantity'>
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                        <div className="inc qtybutton" onClick={() => handleIncrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-topprice'>$ {totalPrice(item)}</td>
                                                <td className='cat-edit'>
                                                    <Link to="" onClick={() => handleRemoveItem(item)}>
                                                        <img src={delImgUrl} alt="" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div> : <div className='text-center'>Cart is Empty</div>}

                        {/* card-end*/}
                        <div className="cart-bottom">
                            <div className="cart-checkout-box">
                                <form className='coupon'>
                                    <input className='cart-page-input-text' name='coupon' id="coupon" placeholder='Coupon code....' />
                                    <input type="submit" value="Apply Coupon" />
                                </form>
                                <form action="" className="cart-checkout">
                                    <input type="submit" value="Update Cart" name="" id="" />
                                    <div className="">CheckoutPage</div>
                                </form>
                            </div>
                            <div className="shiping-box">
                                <div className="row g-3">
                                    <div className="col-md-6 col-12">
                                        <div className="calculate-shiping">
                                            <h3>Calculate shipping</h3>
                                            <div className="outline-select">
                                                <select>
                                                    <option value="uk">United Kingdom</option>
                                                    <option value="bd">Bangladesh</option>
                                                    <option value="pak">Pakistan</option>
                                                    <option value="np">Nepal</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select>
                                                    <option value="nw"> New York</option>
                                                    <option value="dhaka">Dhaka</option>
                                                    <option value="korachi">Korachi</option>
                                                    <option value="nd">New Dehli</option>
                                                </select>
                                                <span className='select-icon'>
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <input type="text" name="postalCode" id="postalCode" placeholder='PostCode/ZIP' className='cart-page-input-text' />
                                            <button type='submit'>Update Adress</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cards Total</h3>
                                            <ul className='lab-ul'>
                                                <li>
                                                    <span className='pull-left'>cart Subtotal</span>
                                                    <p className='pull-right'>$ {cartSubtotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shiping and Handling</span>
                                                    <p className='pull-right'>Free Shiping</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'>$ {orderTotal}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage