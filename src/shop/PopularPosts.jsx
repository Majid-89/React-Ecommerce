import React from 'react'
import { Link } from 'react-router-dom'

const title = "Most Popular Posts"
const postList = [
    {
        id: 1,
        imgUrl: '/src/assets/images/blog/10.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor People Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id: 2,
        imgUrl: '/src/assets/images/blog/11.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id: 3,
        imgUrl: '/src/assets/images/blog/12.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
    {
        id: 4,
        imgUrl: '/src/assets/images/blog/09.jpg',
        imgAlt: 'rajibraj91',
        title: 'Poor Peoples Campaign Our Resources',
        date: 'Jun 05,2022',
    },
]


function Popularposts() {
    return (
        <div className="widget widget-post">
            <div className="widget-header">
                <h1 className='title'>{title}</h1>
            </div>
            <ul className='widget-wrapper'>
                {
                    postList.map((post, index) => {
                        return (
                            <li key={post.id} className='d-flex justify-content-between flex-wrap'>
                                <div className="post-thumb">
                                    <Link to={`/blogs/${post.id}`}>
                                        <img src={post.imgUrl} alt={post.imgAlt} />
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link to={`/blogs/${post.id}`}>
                                        <h5>{post.title}</h5>
                                        <p>{post.date}</p>
                                    </Link>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Popularposts