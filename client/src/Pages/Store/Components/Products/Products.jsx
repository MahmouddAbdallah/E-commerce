import Product from '../../../../Component/Product/Product'
import Pagination from '../Pagination/Pagination'
import { ContextState } from '../context/ContextState'
const Products = () => {
    const { products } = ContextState()
    return (
        <div>
            <div className='row'>
                {products.map((item) => (
                    <Product
                        className=" my-3 col-6 col-md-4 col-lg-3  "
                        key={item?._id}
                        id={item._id}
                        image={item.mainImage}
                        stars={item?.rating?.rate}
                        {...item}
                    />
                ))}
            </div>
            <div>
                <Pagination />
            </div>
        </div>
    )
}

export default Products