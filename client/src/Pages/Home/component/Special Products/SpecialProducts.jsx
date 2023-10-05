import "./SpecialProducts.css"
import axios from 'axios'
import SpecialProductsCard from "./SpecialProductsCard/SpecialProductsCard.jsx"
import { useEffect, useState } from "react"
const SpecialProducts = () => {
    const [spicalProducts, setSpicalProducts] = useState([])
    const getProducts = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product?find={"section":"specialProducts"}`)
            setSpicalProducts(data.products);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
    console.log();
    return (
        <div className=" pt-5">
            <div className=' mt-5 TitleHead'>
                <h4>Special Products</h4>
            </div>
            <div className="row">
                {
                    spicalProducts
                        .map((item) => {
                            return (
                                <SpecialProductsCard
                                    className={'col-12 col-md-6'}
                                    stars={item?.rating?.rate}
                                    key={item._id}
                                    {...item}
                                />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default SpecialProducts