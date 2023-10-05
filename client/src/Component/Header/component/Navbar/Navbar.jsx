import './Navbar.css'
import { Link } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { GoPerson } from 'react-icons/go'
import { MdOutlineCompareArrows } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { useState } from 'react'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="navbar navbar-expand-lg">
            <div className=' w-100 center-center d-md-none d-flex'>
                <Link to={"/"} className=' '>
                    <h5 className="">Store</h5>
                </Link>
            </div>
            <div className="container-fluid gap-5">
                <Link to={"/"} className='d-none d-md-flex'>
                    <h5 className="">Store</h5>
                </Link>
                <form className="d-flex h-100" role="search">
                    <input className="w-100 h-100 search py-1 px-2 py-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn-search" type="submit">
                        <BiSearch />
                    </button>
                </form>
                <div>
                    <button
                        onClick={() => {
                            setToggle(!toggle)
                        }}
                        className=" d-lg-none bg-transparent center-center border-none p-1">
                        <AiOutlineMenu className='text-white' size={20} />
                    </button>
                </div>
                <div className={`d-lg-block ${toggle ? 'd-block nav-bar-sm-screen' : 'd-none'}`}>
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
                                <Link className='d-flex flex-md-row flex-column gap-2 align-items-center text-decoration-none'>
                                    <GoPerson size={25} />
                                    <div>
                                        <span >LOGIN <br /> MY ACCOUNT</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item d-flex gap-2 align-items-center">
                                <Link className='d-flex flex-md-row flex-column gap-2 align-items-center text-decoration-none'>
                                    <AiOutlineShoppingCart size={25} className='cart' />
                                    <div>
                                        <span >COMPARE <br /> ARROWS</span>
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