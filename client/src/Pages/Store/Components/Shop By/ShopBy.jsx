import { ContextState } from "../context/ContextState"
import { Link } from 'react-router-dom'

const ShopBy = () => {
    const { categories } = ContextState()

    return (
        <div>
            <div className="bg-white rounded p-2">
                <div>
                    <h6>Shop By Categories</h6>
                </div>
                <div className="ps-1">
                    <ul className="">
                        {
                            categories.map((item) => (
                                <li key={item._id} >
                                    <Link className=" text-black-50" to={`/store`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShopBy