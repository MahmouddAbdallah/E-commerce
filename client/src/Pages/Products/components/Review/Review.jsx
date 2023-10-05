import PropTypes from 'prop-types'
import './Review.css'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import Stars from '../../../../Component/Stars/Stars'

const Review = ({ productId }) => {
    const [reviews, setReviews] = useState([])
    const getReviews = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/v1/review/${productId}`)
                setReviews(data.reviews)
            } catch (error) {
                console.error(error);
            }
        }, [productId]
    )
    useEffect(() => {
        getReviews()
    }, [getReviews])
    console.log(reviews);
    return (
        <div>
            <div className=' container py-3 bg-white mt-5'>
                {
                    reviews.map(item => (
                        <div key={item._id} className=' p-3 border-b'>
                            <div className='d-flex align-items-center gap-2'>
                                <div className='picture'>
                                    <img src={item.user.picture} className=' img-fluid' alt="" />
                                </div>
                                <div className='nameStars'>
                                    <h6>{item.user.name}</h6>
                                    <div>
                                        <Stars stars={item.stars} />
                                    </div>
                                </div>
                            </div>
                            <div className='review- d-flex'>
                                <div className='font-semibold'>
                                    Review : &#160;
                                </div>
                                <div className='w-100'>
                                    <span className=''>
                                        {item.message}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

Review.propTypes = {
    productId: PropTypes.string.isRequired
}

export default Review