
import PropTypes from 'prop-types'
import './Product.css'
import { Link } from 'react-router-dom'
import Stars from '../Stars/Stars'

const Product = ({ id, image, title, stars, className, price }) => {
    return (
        <div className={`${className}`}>
            <Link to={`/products/${id}`} className=' product'>
                <div className='bg-white px-3 rounded h-100 card border-none shadow-sm d-grid'>
                    <div className='grid-row'>
                        <div className='center-center p-4'>
                            <img src={image} className="card-img" alt="" />
                        </div>
                    </div>
                    <div className=' grid-row'>
                        <h6 className='title'>{title?.slice(0, 39)}...</h6>
                        <div>
                            <Stars stars={stars} />
                        </div>
                        <h6 className='price'>${price}</h6>
                    </div>
                </div>
            </Link>
        </div>
    )
}

Product.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.any,
    desc: PropTypes.string,
    stars: PropTypes.number,
    className: PropTypes.string
}

export default Product