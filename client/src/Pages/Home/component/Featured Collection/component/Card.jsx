import PropTypes from 'prop-types'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({ _id, mainImage, subTitle, title, price, className }) => {
    return (
        <Link to={`/products/${_id}`} className={`cardFeature ${className}`}>
            <div className="card py-3 px-3">
                <div className=' text-white'>
                    <p className=' text-uppercase'>{subTitle}</p>
                    <h5>{title.slice(0, 50)}</h5>
                    <p>${price}</p>
                </div>
                <div>
                    <img src={mainImage} className=' img-fluid ' alt="" />
                </div>
            </div>
        </Link>
    )
}

Card.propTypes = {
    mainImage: PropTypes.string,
    _id: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    price: PropTypes.number,
}

export default Card