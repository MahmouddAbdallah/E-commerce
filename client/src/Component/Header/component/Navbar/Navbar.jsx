import './Navbar.css'
import { Link } from 'react-router-dom'
import { GoPerson } from 'react-icons/go'
import { MdOutlineCompareArrows } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'
import { DataContext } from '../../../../context/MainContextState'
import { useSelector } from 'react-redux'
import Search from '../Search/Search'


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const { user } = DataContext()
    const cartLength = useSelector(state => state.Product.cart.length)
    return (
        <nav className="navbar navbar-expand-lg">
            <div className=' w-100 d-md-none d-flex justify-content-between px-3 pb-3 px-md-0 pb-md-0'>
                <Link to={"/"} className=' '>
                    <h5 className="">Store</h5>
                </Link>
                <div>
                    <button
                        onClick={() => {
                            setToggle(!toggle)
                        }}
                        className=" d-lg-none bg-transparent center-center border-none p-1">
                        <AiOutlineMenu className='text-white' size={20} />
                    </button>
                </div>
            </div>
            <div className="container-fluid gap-5">
                <Link to={"/"} className='d-none d-md-flex'>
                    <h5 className="">Store</h5>
                </Link>
                <div className=' w-100'>
                    <Search />
                </div>
                <div className={`d-md-block ${toggle ? 'd-flex flex-column nav-bar-sm-screen' : 'd-none'}`}>
                    <div className={` d-lg-block`}>
                        <ul className="d-flex align-items-center justify-content-center list-unstyled gap-3">
                            <li className="nav-item">
                                <Link className='d-flex flex-md-row flex-column gap-2 align-items-center text-decoration-none'>
                                    <MdOutlineCompareArrows size={25} />
                                    <div>
                                        <span >COMPARE <br /> ARROWS</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className='d-flex flex-md-row flex-column gap-2 align-items-center text-decoration-none'>
                                    <AiOutlineHeart size={25} />
                                    <div>
                                        <span >FAVOURITE <br /> WISHLIST</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item d-flex gap-2 align-items-center">
                                {user ?
                                    <div to={"/signin"} className='d-flex flex-md-row flex-column gap-2 align-items-center text-decoration-none'>
                                        <GoPerson size={25} />
                                        <div>
                                            <span > {user?.name?.split(" ")[0]}</span>
                                        </div>
                                    </div>
                                    :
                                    <Link to={"/signin"} className='d-flex flex-md-row flex-column gap-2 align-items-center text-decoration-none'>
                                        <GoPerson size={25} />
                                        <div>
                                            <span >LOGIN <br /> MY ACCOUNT</span>
                                        </div>
                                    </Link>
                                }
                            </li>
                            <li className="nav-item d-flex gap-2 align-items-center">
                                <Link to={'/cart'} className='d-flex flex-md-row flex-column gap-2 align-items-center text-decoration-none position-relative'>
                                    <AiOutlineShoppingCart size={30} className='cart' />
                                    {cartLength == 0 ? "" : <div className=' position-absolute cart-length center-center'>
                                        <span>{cartLength}</span>
                                    </div>}
                                    <div>
                                        <span >CART <br /> ORDERS</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar