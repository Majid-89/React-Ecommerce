import React, { useLayoutEffect } from 'react'

function Pagination({ productsPerPage, totalProducts, paginate, activePage }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <ul className='default-pagination lab-ul'>
            <li className='d-block mt-3  d-flex justify-content-center align-content-center' >
                <span onClick={() => {
                    if (activePage <= pageNumbers.length) {
                        paginate(activePage - 1)
                    }
                }}>
                    <i className='icofont-rounded-left'></i>
                </span>
            </li>
            {
                pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
                        <button onClick={() => paginate(number)} className='bg-transparent'>{number}</button>
                    </li>
                ))
            }
            <li className='d-block mt-3  d-flex justify-content-center align-content-center'>
                <span onClick={() => {
                    if (activePage < pageNumbers.length) {
                        paginate(activePage + 1)
                    }
                }}>
                    <i className='icofont-rounded-right'></i>
                </span>
            </li>
        </ul>
    )
}

export default Pagination