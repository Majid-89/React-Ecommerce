import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Ratting from '../Components/Ratting';
const reviwtitle = "Add a Review";
let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];

function Review() {
    const [review, setReview] = useState(true)
    return (
        <>
            <ul className={`review-nav lab-ul ${!review ? "RevActive" : "DescActive"}`}>
                <li onClick={() => setReview(!review)} className='desc'>Description</li>
                <li onClick={() => setReview(!review)} className='rev'>Review 4</li>
            </ul>

            <div className={`review-content ${review ? "review-content-show" : "description-show"}`}>
                <div className="review-showing">
                    <ul className="content lab-ul">
                        {
                            ReviewList.map((item, index) => (
                                <li key={index}>
                                    <div className="post-thumb">
                                        <img src={item.imgUrl} alt={item.imgAlt} />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <Link to="">{item.name}</Link>
                                                <p>{item.date}</p>
                                            </div>
                                        </div>
                                        <div className="entry-contnet">
                                            <p>{item.desc}</p>
                                        </div>

                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    {/* add review field*/}

                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviwtitle}</h5>
                            </div>
                            <form action="" className='row'>
                                <div className="col-md-4 col-12">
                                    <input type="text" name='name' placeholder='Full name' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="email" name='email' placeholder='Enter Email' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className='me-2'>Your Rating</span>
                                        <Ratting />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/*  description  */}
                <div className="description" style={{ textAlign: "justify" }}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatem tempora earum quibusdam officia! Ex veniam laborum maiores ab asperiores ipsam exercitationem delectus labore ut earum, odit sequi reiciendis vitae magni quibusdam mollitia, deserunt ad impedit. Illum similique repellat quam obcaecati corporis repudiandae, cumque dolorum suscipit, culpa quae libero sit cupiditate minima veritatis facilis quidem doloremque maxime consequatur officia ex soluta perferendis. Beatae blanditiis magnam itaque sunt a dolores eveniet! Repudiandae vero, debitis, facere quasi impedit aspernatur officia possimus maxime quas quaerat consectetur ullam iure reiciendis, dolores quo vel quod voluptates tempora quae soluta sapiente quibusdam corrupti. Distinctio, ipsa odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, quasi obcaecati. Porro assumenda incidunt, ipsum harum laborum consequuntur iusto distinctio blanditiis suscipit provident, debitis nihil iste neque esse expedita. Repellendus?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere ex facilis magnam tempora id rerum minus nobis enim optio dolorem dolores fugiat non harum, quae ratione iste voluptate. Ex, quisquam!</p>

                    <div className="post-item">
                        <div className="post-thumb">
                            <img src="/src/assets/images/shop/01.jpg" alt="" />
                        </div>
                        <div className="post-content">
                            <ul className="lab-ul">
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptates?</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptates?</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptates?</li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, voluptates?</li>
                            </ul>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique dignissimos ducimus repellendus aspernatur autem incidunt veniam amet aut, omnis at voluptas quis soluta obcaecati corporis fuga maiores quam nemo explicabo suscipit atque perspiciatis? Et possimus commodi molestiae reprehenderit. Sunt cumque quod adipisci harum maiores, hic, consequatur, dignissimos iusto optio quisquam sit ab dolorum. Minus, quae. Asperiores corporis saepe, sapiente quam perferendis omnis, temporibus ex molestias tempora officia id, aliquid reiciendis odit rem sunt cum expedita porro quasi nesciunt perspiciatis aspernatur. Ducimus corporis ratione delectus cum excepturi numquam veniam quasi voluptas tempore eaque a ex fugit explicabo, deserunt, nulla culpa!</p>
                </div>
            </div>
        </>
    )
}

export default Review