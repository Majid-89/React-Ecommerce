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
                    </div>

                </div>
            </div>
        </>
    )
}

export default CartPage