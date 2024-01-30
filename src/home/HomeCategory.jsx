import React from 'react'
import { Link } from 'react-router-dom'

const categoryList = [
    {
        imgUrl: 'src/assets/images/category/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: 'src/assets/images/category/02.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: 'src/assets/images/category/03.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: 'src/assets/images/category/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: 'src/assets/images/category/05.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: 'src/assets/images/category/06.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]
function HomeCategory() {
    return (
        <div className='category-section style-4 padding-tb'>
            <div className="container">
                <div className="section-header text-center">
                    <span className='subtitle text-center'>Choose Any Products</span>
                    <h2 className='title'>Buy Everything with Us</h2>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-md-3 row-col-sm-2 row-cols-1">
                        {categoryList.map((value, index) => (
                            <div key={index} className="col">
                                <Link to="/shop" className="category-item">
                                    <div className="category-inner">
                                        <div className="category-thumb">
                                            <img src={value.imgUrl} alt={value.imgAlt} />
                                        </div>
                                        <div className="category-content">
                                            <div className="cate-icon">
                                                <i className={value.iconName}></i>
                                            </div>
                                            <Link to="/shop"><h6>{value.title}</h6></Link>

                                        </div>
                                    </div>
                                </Link>

                            </div>
                        ))}
                        <div className="text-center">
                            <Link to="/shop" className='lab-btn'><span>Get Started Now</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCategory