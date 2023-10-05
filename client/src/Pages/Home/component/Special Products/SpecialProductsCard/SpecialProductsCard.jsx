import PropTypes from 'prop-types'
import './SpecialProductsCard.css'
import { AiFillStar } from 'react-icons/ai'
import { useState } from 'react'

const SpecialProductsCard = ({ images, brand, title, oldPrice, stars, priceExp, price, className }) => {
    const precent = (price / oldPrice) * 100
    const [changeImage, setChangeImage] = useState(0)
    return (
        <div className={`my-2 ${className}`}>
            <div className='rounded p-2 my-2 SpecialProductsCard h-100'>
                <div className='row'>
                    <div className=' col-5 d-flex flex-column justify-content-between'>
                        <div>

                            <div className='precent px-2 mr-1'>
                                <p>{precent.toFixed()}%</p>
                            </div>

                            <div className=' '>
                                <img src={images[changeImage]} className=' img-product' alt="" />
                            </div>
                            <div>
                                {/* heart */}
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-center gap-2">
                                {images.map((item, i) => {
                                    return (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault()
                                                setChangeImage(i);
                                            }}
                                            className='review' key={i}>
                                            <img src={item} className='img-review' alt="" />
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='details col-7'>
                        <div>
                            <h6 className='brand text-uppercase'>{brand}</h6>
                            <h4>{title}</h4>
                            <div className='d-flex gap-1'>
                                {Array(Math.floor(stars))
                                    .fill()
                                    .map((_, i) => {
                                        return (
                                            <div key={i}  >
                                                <AiFillStar className='star' />
                                            </div>
                                        )
                                    })
                                }
                                {Math.floor(stars) < 5 &&
                                    Array(5 - Math.floor(stars))
                                        .fill()
                                        .map((_, i) => {
                                            return (
                                                <div key={i}  >
                                                    <AiFillStar className='empty-star ' />
                                                </div>
                                            )
                                        })
                                }
                            </div>
                            <div className='d-flex gap-2 money'>
                                <span className='price'>${price}</span>
                                <del className='oldPrice'>${oldPrice}</del>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-3 date'>
                            <div>
                                <span className='numer-of-date'>{priceExp.split(" ")[0]} </span>
                                <span className='string-of-date'>{priceExp.split(" ")[1]}</span>
                            </div>
                            <div className='d-flex gap-1 align-items-center'>
                                <div className=' time center-center'>25</div>:
                                <div className=' time center-center'>12</div>:
                                <div className=' time center-center'>1</div>
                            </div>
                        </div>
                        <div className='mt-3'>
                            {/* <div></div> */}
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: `${precent}%` }}></div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div>
                                <button className=' btn'>buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

SpecialProductsCard.propTypes = {
    id: PropTypes.string,
    images: PropTypes.array,
    brand: PropTypes.string,
    title: PropTypes.string,
    oldPrice: PropTypes.number,
    price: PropTypes.number,
    className: PropTypes.string,
    priceExp: PropTypes.string,
    stars: PropTypes.number,
    pieces: PropTypes.number,
}

export default SpecialProductsCard