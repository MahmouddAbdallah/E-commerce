import './Products.css'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Review from './components/Review/Review'
import Stars from '../../Component/Stars/Stars'
// import ReactImageMagnify from 'react-image-magnify';
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/features/product'
import { DataContext } from '../../context/MainContextState'
const Product = () => {
    const { _id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [changeImage, setChangeImage] = useState(0)
    const { user, config } = DataContext()
    const disptach = useDispatch()

    const getProduct = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/v1/product/${_id}`, config)
                setProduct(data.product)
                setLoading(true)
            } catch (error) {
                console.error(error);
            }
        }
        , [_id, config])
    useEffect(() => {
        getProduct()
    }, [getProduct])
    const cartAdding = async () => {
        const { data } = await axios.post("/api/v1/cart", {
            user: user._id,
            product: product._id
        }, config)
        disptach(addToCart(data.cart))
        console.log(data.cart.product);
    }
    useEffect(() => {
        window.scroll({
            top: 0,
        })
    }, [])
    return (
        <div className='products'>
            {loading ?
                <div className=' container py-5'>
                    <div>
                        {[product]?.map((item) => {
                            const stars = item?.rating?.rate
                            return (
                                <div key={item._id} className=' bg-white'>
                                    <div className=' row'>
                                        <div className='col-12 col-lg-5'>
                                            <div className='d-flex  gap-2 p-3'>
                                                <div className='d-flex flex-column gap-2 pt-2'>
                                                    {item?.images?.map((image, i) => {
                                                        return (
                                                            <button onClick={(e) => {
                                                                e.preventDefault()
                                                                setChangeImage(i);
                                                            }} key={i} className=' bg-transparent border rounded'>
                                                                <img src={`${image.startsWith(".") ? "." : ""}${image}`} className='smallImages' alt="" />
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                                <div className='m-2 p-2 border rounded' >
                                                    {/* <ReactImageMagnify
                                                        {...{
                                                            smallImage: {
                                                                alt: 'Product Image',
                                                                src: `${item.images[changeImage].startsWith(".") ? "." : ""}${item.images[changeImage] || item.mainImage}`,
                                                                isFluidWidth: true
                                                            },
                                                            largeImage: {
                                                                src: `${item.images[changeImage].startsWith(".") ? "." : ""}${item.images[changeImage] || item.mainImage}`,
                                                                width: 1200,
                                                                height: 1800
                                                            }
                                                        }}
                                                    /> */}
                                                    <img src={`${item.images[changeImage].startsWith(".") ? "." : ""}${item.images[changeImage] || item.mainImage}`} className=' img-fluid' alt="" />
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
                                                <div>
                                                    <Stars stars={stars} />
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
                                                    <button onClick={cartAdding} className=' btn'>Add to cart</button>
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