import './Checkout.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/features/product'
import axios from 'axios';
import { DataContext } from '../../context/MainContextState';

const Checkout = () => {
    const cart = useSelector(state => state.Product.cart)
    const disptach = useDispatch()
    const { config } = DataContext()

    let price = 0;
    cart.forEach(element => {
        [element.product].forEach(element => {
            price = element.price + price
        })
    });
    return (
        <div className='checkout'>
            {cart.length
                ?
                <div className=' container'>
                    <div className='row py-4'>
                        <div className=' d-block d-lg-none col-lg-4 bg-white mb-4'>
                            <div className='p-3'>
                                <h6>Subtotal ({cart.length} items) :
                                    ${price}
                                </h6>
                                <button className=' w-100 mt-3 rounded border-none outline-none py-1 bg-gold text-white'>buy now</button>
                            </div>
                        </div>
                        <div className='cart-product col-12 col-lg-8'>
                            {cart.map(cart => {
                                const removeProduct = async () => {
                                    try {
                                        await axios.delete(`/api/v1/cart/${cart._id}`, config)
                                        disptach(removeFromCart(cart._id))
                                    } catch (error) {
                                        console.error(error);
                                    }
                                }
                                return (
                                    [cart.product]
                                        .map(item => {
                                            return (
                                                <div key={item._id} className='row bg-white py-4 px-2 border-b'>
                                                    <div className=' col-12 col-sm-6 col-md-4 col-lg-3 center-center'>
                                                        <img src={item?.mainImage} className=' img-fluid' alt='' />
                                                    </div>
                                                    <div className='col-12 col-sm-6 col-md-8 col-lg-7'>
                                                        <div className='title'>
                                                            <h5>{item.title}</h5>
                                                        </div>
                                                        <div className='mb-3'>
                                                            <h6>${item.price}</h6>
                                                        </div>
                                                        <div>
                                                            <button onClick={removeProduct} className='btn'>
                                                                Delete
                                                            </button>
                                                            <button className='btn'>
                                                                Save for later
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }))
                            })}
                        </div>
                        <div className=' d-none d-lg-block col-lg-4'>
                            <div className=' bg-white ms-4 p-3 rounded'>
                                <h6>Subtotal ({cart.length} items) :
                                    ${price}
                                </h6>
                                <button className=' w-100 mt-3 rounded border-none outline-none py-1 bg-gold text-white'>buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className='empty-cart'>
                    <img src="./images/empty-cart.jpg" className=' img-fluid' alt="" />
                </div>
            }
        </div>
    )
}

export default Checkout