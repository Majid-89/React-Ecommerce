import React, { useState } from 'react'
import Ratting from '../Components/Ratting';
import { Link } from 'react-router-dom';

const title = "Our Products";

const ProductData = [
    {
        imgUrl: 'src/assets/images/categoryTab/01.jpg',
        cate: 'Shoes',
        title: 'Nike Premier X',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 1,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/02.jpg',
        cate: 'Bags',
        title: 'Asthetic Bags',
        author: 'assets/images/course/author/02.jpg',
        brand: 'D&J Bags',
        price: '$199.00',
        id: 2,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/03.jpg',
        cate: 'Phones',
        title: 'iPhone 12',
        author: 'src/assets/images/categoryTab/brand/apple.png',
        brand: 'Apple',
        price: '$199.00',
        id: 3,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/04.jpg',
        cate: 'Bags',
        title: 'Hiking Bag 15 Nh100',
        author: 'assets/images/course/author/04.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 4,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/05.jpg',
        cate: 'Shoes',
        title: 'Outdoor Sports Shoes',
        author: 'assets/images/course/author/05.jpg',
        brand: 'Nike',
        price: '$199.00',
        id: 5,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/06.jpg',
        cate: 'Beauty',
        title: 'COSRX Snail Mucin',
        author: 'assets/images/course/author/06.jpg',
        brand: 'Zaara',
        price: '$199.00',
        id: 6,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/07.jpg',
        cate: 'Bags',
        title: 'Look Less Chanel Bag ',
        author: 'assets/images/course/author/01.jpg',
        brand: 'Gucci',
        price: '$199.00',
        id: 7,
    },
    {
        imgUrl: 'src/assets/images/categoryTab/08.jpg',
        cate: 'Shoes',
        title: 'Casual Sneakers',
        author: 'assets/images/course/author/02.jpg',
        brand: 'Bata',
        price: '$199.00',
        id: 8,
    },
]

function ProductShowCase() {
    const [items, setItems] = useState(ProductData)
    const [activeCategory, setActiveCategory] = useState("All")

    const filterItem = (catItem) => {
        setActiveCategory(catItem)
        const filteredItem = ProductData.filter((products) => (products.cate === catItem))
        setItems(filteredItem)
    }
    return (
        <div className="course-section style-3 padding-tb">
            <div className="course-shape one"><img src="/src/assets/images/shape-img/icon/01.png" alt="" /></div>
            <div className="course-shape two"><img src="/src/assets/images/shape-img/icon/02.png" alt="" /></div>
            <div className="container">
                <div className="section-header">
                    <h1>{title}</h1>
                    <div className='course-filter-group'>
                        <ul className='lab-ul'>
                            <li onClick={() => { setItems(ProductData); setActiveCategory("All") }} className={`${activeCategory === "All" ? "bg-warning" : ""}`} >All</li>
                            <li onClick={() => filterItem("Shoes")} className={`${activeCategory === "Shoes" ? "bg-warning" : ""}`}>Shoes</li>
                            <li onClick={() => filterItem("Bags")} className={`${activeCategory === "Bags" ? "bg-warning" : ""}`}>Bags</li>
                            <li onClick={() => filterItem("Beauty")} className={`${activeCategory === "Beauty" ? "bg-warning" : ""}`}>Beauty</li>
                            <li onClick={() => filterItem("Phones")} className={`${activeCategory === "Phones" ? "bg-warning" : ""}`}>Phones</li>
                        </ul>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-col-lg-3 row-cols-md-2 row-cols-1 couse-filter">
                        {
                            items.map((product, index) => (
                                <div className="col" key={index}>
                                    <div className="course-item style-4">
                                        <div className="course-inner">
                                            <div className="course-thumb">
                                                <img src={product.imgUrl} alt="" />
                                                <div className="course-category">
                                                    <div className="course-cate">
                                                        <a href="#">{product.cate}</a>
                                                    </div>
                                                    <div className="couse-reiew">
                                                        <Ratting />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="course-content">
                                                <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                                                <div className="course-footer">
                                                    <div className="course-auther">
                                                        <Link to="/" className="ca-name">{product.brand}</Link>
                                                    </div>
                                                    <div className="course-price">
                                                        {product.price}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductShowCase