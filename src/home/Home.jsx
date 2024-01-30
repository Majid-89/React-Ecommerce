import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import ProductShowCase from './ProductShowCase'
import Register from './Register'
import LocationSpread from './LocationSpread'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

function Home() {
    return (
        <>
            <Banner />
            <HomeCategory />
            <ProductShowCase />
            <Register />
            <LocationSpread />
            <AboutUs />
            <AppSection />
            <Sponsor />
        </>
    )
}

export default Home