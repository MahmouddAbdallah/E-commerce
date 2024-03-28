import { useEffect, useState } from 'react'
import Product from '../../../../Component/Product/Product'
import axios from 'axios'
import Cards from './component/Cards'

const Feature = () => {
    const [featureProducts, setFeatureProducts] = useState([])
    const getProducts = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product?limit=6&find={"section":"feature"}`)
            setFeatureProducts(data.products);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className='features'>
            <div className=' mt-5 TitleHead'>
                <h4> Featured Collection</h4>
            </div>
            <div className=' productFeatures'>
                <div className='  row justify-content-lg-center rounded'>
                    {featureProducts.map((item) => (
                        <Product
                            className=" my-3 col-6 col-md-4 col-lg-2 "
                            key={item._id}
                            id={item._id}
                            image={item.mainImage}
                            stars={item?.rating?.rate}
                            {...item}
                        />
                    ))}
                </div>
            </div>
            <div >
                <Cards />
            </div>
        </div>
    )
}

export default Feature