import React from 'react'
import { NavLink } from 'react-router-dom'

function PageBanner({ title, link }) {
    return (
        <div className='pageheader-section'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="page-content text-center">
                            <h2>{title}</h2>
                            <nav aria-label='breadcrumb'>
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                    <li className="breadcrumb-item"><NavLink className={({ isActive }) => `${isActive ? "text-primary fw-bold" : ""}`
                                    } to={link}>{title}</NavLink></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageBanner