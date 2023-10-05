import './Products.css'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import Review from './components/Review/Review'

const Product = () => {
    const { _id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const getProduct = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/v1/product/${_id}`)
                setProduct(data.product)
                setLoading(true)
            } catch (error) {
                console.error(error);
            }
        }
        , [_id])
    useEffect(() => {
        getProduct()
    }, [getProduct])
    return (
        <div className='products'>
            {loading ?
                <div className=' container py-5'>
                    <div>
                        {[product].map((item) => {
                            const stars = item?.rating?.rate
                            const about = item.about
                            console.log(about);
                            return (
                                <div key={item._id} className=' bg-white'>
                                    <div className=' row'>
                                        <div className='col-12 col-lg-5'>
                                            <div className='d-flex  gap-2 p-3'>
                                                <div className='d-flex flex-column gap-2 pt-2'>
                                                    {item.images.map((image, i) => {
                                                        return (
                                                            <button onMouseOver={() => {
                                                            }} key={i} className=' bg-transparent border rounded p-1'>
                                                                <img src={`${image.startsWith(".") ? "." : ""}${image}`} className=' img-fluid smallImages' alt="" />
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                                <div className='m-2 p-2 border rounded' >
                                                    <img src={`${item.mainImage.startsWith(".") ? "." : ""}${item.mainImage}`} className=' img-fluid' alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-7'>
                                            <div className='py-5 ps-3 ps-lg-0'>
                                                <div className='title'>
                                                    <h5>{item.title}</h5>
                                                </div>
                                                <div className='py-2'>
                                                    <h6>${item.price}</h6>
                                                </div>
                                                <div className='d-flex'>
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
                                                <div className=' d-inline-flex'>
                                                    <h6>Brand :&#160;</h6>
                                                    <span className=' fw-bold'>{item.brand}</span>
                                                </div>
                                                <div className=' d-flex '>
                                                    <h6>Description:&#160;</h6>
                                                    <p className='desc'>{item.desc}</p>
                                                </div>
                                                <h6>pay :</h6>
                                                <div className='pay d-flex gap-3 ms-5'>
                                                    <button className=' btn'>Add to cart</button>
                                                    <button className=' btn'>Buy it now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <Review productId={product?._id} />
                    </div>
                </div>
                :
                <div className='spinner'>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Product