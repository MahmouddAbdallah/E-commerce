import PropTypes from 'prop-types'
import './Card.css'
const Card = ({ key, image, subTitle, title, price, className }) => {
    return (
        <div key={key} className={`cardFeature ${className}`}>
            <div className="card py-3 px-3">
                <div className=' text-white'>
                    <p className=' text-uppercase'>{subTitle}</p>
                    <h5>{title}</h5>
                    <p>{price}</p>
                </div>
                <div>
                    <img src={image} className=' img-fluid ' alt="" />
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    key: PropTypes.string,
    image: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    className: PropTypes.string,
    price: PropTypes.string,
}

export default Card