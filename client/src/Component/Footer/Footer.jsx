import './Footer.css'
import { IoIosSend } from 'react-icons/io'
const Footer = () => {
    return (
        <footer>
            <form className='py-5 container'>
                <div className='row'>
                    <div className=' col-12 col-md-5 col-lg-6'>
                        <h3 style={{ fontSize: "15px", color: "white" }} > <IoIosSend className='' size={20} />Subscribe to our newsletter</h3>
                    </div>
                    <div className=' position-relative col-12 col-md-7 col-lg-6 d-flex justify-content-end align-items-center '>
                        <input type="text" className='w-100 py-2 px-2 rounded' placeholder='Your Email' />
                        <div className=' position-absolute px-2'>
                            <button className='subscribe px-2 rounded'>
                                subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <div style={{ height: ".4px" }} className='w-100 bg-white' />
            <div className='py-5'>
                <div className=' container'>
                    <div className='row'>
                        <div className='text-white col-6 col-sm-6 col-md-4 col-lg-3 my-4 '>
                            <h5>Contact Us</h5>
                            <ul>
                                <li>
                                    <a href="">
                                        Demo Store
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        No 1254. Egypt united States
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Demo154@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='text-white col-6 col-sm-6 col-md-4 col-lg-3 my-4 '>
                            <h5>Information</h5>
                            <ul>
                                <li>
                                    <a href="">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Refund Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Shipping Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Terms Of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Blogs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='text-white col-6 col-sm-6 col-md-4 col-lg-3 my-4 '>
                            <h5>Account</h5>
                            <ul>
                                <li>
                                    <a href="">
                                        Search
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Faq
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Size Chart
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='text-white col-6 col-sm-6 col-md-4 col-lg-3 my-4 '>
                            <h5>Quick Links</h5>
                            <ul>
                                <li>
                                    <a href="">
                                        Accessories
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Laptops
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        HeadPhones
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Smart Watches
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        tablets
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: ".4px" }} className='w-100 bg-white' />
            <div className='py-5'>
                <div className="container">
                    <p className="text-white">
                        © 2023 by Mahmoud Mohamed AbdAllah.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer