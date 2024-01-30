import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageBanner from '../Components/PageBanner'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import "swiper/css"
import ProductDisplay from './ProductDisplay';
import Products from '../products.json'


function SingleProduct() {
    const [product, setProduct] = useState(Products)
    const { id } = useParams()
    // const [product, setproduct] = useState(second)
    // useEffect(() => {
    //     fetch("/src/products.json").then(res => res.json()).then(data => setProduct(data))
    // }, [])
    const result = Products.filter((product) => product.id === id)
    return (
        <div>
            <PageBanner title="Single Product Page" />
            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12">
                                            <div className="product-thumb">
                                                <Swiper
                                                    slidesPerView={1}
                                                    spaceBetween={30}
                                                    loop={"true"}
                                                    autoplay={{
                                                        delay: 2000,
                                                        disableOnInteraction: false
                                                    }}
                                                    modules={[Autoplay]}
                                                    navigation={{
                                                        prevEl: ".pro-single-prev",
                                                        nextvEl: ".pro-single-next"
                                                    }}
                                                    className="mySwiper">

                                                    <div className="swiper-container pro-single-top">
                                                        {
                                                            result.map((product, index) => (
                                                                <SwiperSlide key={index}>
                                                                    <div className="single-thumb">
                                                                        <img src={product.img} alt="" />
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))
                                                        }
                                                    </div>
                                                </Swiper>
                                                <div className="pro-single-next">
                                                    <i className='icofont-rounded-left'></i>
                                                </div>
                                                <div className="pro-single-prev">
                                                    <i className='icofont-rounded-right'></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            {
                                                result.map((item, index) => <ProductDisplay item={item} key={index} />
                                                )
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className="review">
                                    review
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">Right side</div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SingleProduct