import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Search({ gridList, products }) {
    const [searchTerm, setSearchTerm] = useState("")
    const filterProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))


    return (
        <div className="widget widget-search">
            <form action="" className="search-wrapper mb-3">
                <input type="text" name="search" placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button>
                    <i className='icofont-search-2'></i>
                </button>
            </form>
            {
                searchTerm && filterProducts.map((product, index) => (
                    <Link key={index} to={`shops/${product.id}`}>
                        <div className="d-flex gap-3 p-2">
                            <div className="">
                                <div className="pro-thumb h-25">
                                    <img src={product.img} alt="" width={70} className='flex-{grow|shrink} ' />
                                </div>
                            </div>
                            <div className="product-content">
                                <p>
                                    <Link to={`shops/${product.id}`}>{product.name}</Link>
                                </p>
                                <h6>{product.price}</h6>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Search