import React from 'react'
import { Link } from 'react-router-dom'
const btntext = "Sign up for Free"
const title = "Shop Anytime , Anywhere"
const desc = "Take shop on your any device with our app & learn all time what you want. Just Download and start"

function AppSection() {
    return (
        <div className="app-section padding-tb">
            <div className="container">
                <div className="section-header text-center">
                    <Link to="/sign-up" className="lab-btn mb-4">{btntext}</Link>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <div className="section-wrapper">
                    <ul className='lab-ul'>
                        <i className='mx-2'><img src="/src/assets/images/app/01.jpg" alt="" /></i>
                        <i><img src="/src/assets/images/app/02.jpg" alt="" /></i>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppSection