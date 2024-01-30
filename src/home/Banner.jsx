import React, { useState } from 'react'
import productData from '../products.json'
import { Link } from 'react-router-dom';
import SelectedCategory from '../Components/SelectedCategory';
const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
];
function Banner() {
    const [searchInput, setsearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productData)

    const handleSearch = (e) => {
        setsearchInput(e.target.value)
        const filteredData = productData.filtered((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
        setFilteredProducts(filteredData)
    }
    return (
        <div className="banner-section style-4">
            <div className="container">
                <div className="banner-content">
                    <h2>Search Your One From <span>Thousand</span>  Products</h2>
                    <form action="">
                        <SelectedCategory />
                        <input type="text" name='search' id='search' placeholder='Search your product' value={searchInput} onChange={handleSearch} />
                        <button>
                            <i className='icofont-search'></i>
                        </button>
                    </form>
                    <p>we have the largest collection of products</p>
                    <ul className='lab-ul'>
                        {
                            searchInput && filteredProducts.map((product, index) => <li key={index}>
                                <Link to={`/shops/${product.id}`}>{product.name}</Link>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner