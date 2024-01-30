import React, { useState } from 'react'
import PageBanner from '../Components/PageBanner'
import productsData from '../products.json'
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import Popularposts from './Popularposts'
const showResults = "Showing 01 - 12 of 139 Results"

const Shop = () => {
    const [gridList, setGridList] = useState(false)
    const [product, setProduct] = useState(productsData)

    {/*Pagination */ }
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 12
    const IndexOfLastProduct = currentPage * productsPerPage
    const IndexOfFirstProduct = IndexOfLastProduct - productsPerPage
    const currentProducts = product.slice(IndexOfFirstProduct, IndexOfLastProduct)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <PageBanner title="Shop Page" link="/shop" />
            {/* shop page*/}
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode`}>
                                        <a className={`${!gridList ? "text-danger" : ""}`} onClick={() => setGridList(!gridList)}>
                                            <i className="icofont-ghost"></i>
                                        </a>
                                        <a className={`${gridList ? "text-danger" : ""}`} onClick={() => setGridList(!gridList)}>
                                            <i className="icofont-listine-dots"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="">
                                    <ProductCards gridList={gridList} products={currentProducts} />
                                </div>
                                <Pagination productsPerPage={productsPerPage} totalProducts={product.length} paginate={paginate} activePage={currentPage} />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search gridList={gridList} products={productsData} />
                                <Popularposts />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop