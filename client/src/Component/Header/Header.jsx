import { NavLink } from "react-router-dom"
import Navbar from "./component/Navbar/Navbar"
import { BiStore } from 'react-icons/bi'
import './Header.css'
const Header = () => {
    return (
        <div>
            <header className="header-top-strip">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div>
                            <span style={{ fontSize: "11px" }}>Free Shoping Over $100 & Free Returns</span>
                        </div>
                        <div>
                            <span style={{ fontSize: "11px" }}>Hotline ({+20}): {'010223655652'} </span>
                        </div>
                    </div>
                    <Navbar />
                </div>
                <div className="third-header py-1">
                    <div className="container py-1">
                        <div className="d-flex align-items-center">
                            <form className="center-center">
                                <div>
                                    <BiStore size={20} />
                                </div>
                                <select style={{ fontSize: "12px" }} className=" bg-transparent text-white border-none me-3">
                                    <option className="" value="cate">Shop Categories</option>
                                    <option className="" value="act">Action</option>
                                </select>
                            </form>
                            <div style={{ height: '20px', width: "1px", background: '#ffffff' }} />
                            <ul className="d-flex align-items-center gap-3 ms-3">
                                <li className="center-center">
                                    <NavLink to={'/'} style={{ fontSize: "12px" }} className="text-white">
                                        HOME
                                    </NavLink>
                                </li>
                                <li className="center-center">
                                    <NavLink to={'/store'} style={{ fontSize: "12px" }} className="text-white">
                                        OUR STORE
                                    </NavLink>
                                </li>
                                <li className="center-center">
                                    <NavLink style={{ fontSize: "12px" }} className="text-white">
                                        BLOGS
                                    </NavLink>
                                </li>
                                <li className="center-center">
                                    <NavLink style={{ fontSize: "12px" }} className="text-white">
                                        CONTANT
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header