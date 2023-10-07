import './Search.css';
import { Link, useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Stars from '../../Component/Stars/Stars';
import FilterBy from './component/Filter By/Filter By/FilterBy';
const Search = () => {
    const [searchParams] = useSearchParams();
    const [product, setProduct] = useState([])
    const [priceFrom, setPriceFrom] = useState("")
    const [priceTo, setPriceTo] = useState("")
    const searchItem = searchParams.get("searchItem");
    const getProducts = useCallback(
        async () => {
            try {
                if (searchItem) {
                    const { data } = await axios.get(`/api/v1/product?keyword=${searchItem}&${(priceFrom == "" || priceTo == "") ? "" : `price[gte]=${priceFrom}&price[lte]=${priceTo}`}`)
                    setProduct(data.products);
                } else {
                    setProduct([])
                }
            } catch (error) {
                console.error(error);
            }
        }, [priceFrom, priceTo, searchItem]
    )
    useEffect(() => {
        getProducts()
    }, [getProducts])
    return (
        <div className='search-page'>
            <div className=' container py-5'>
                <div className='row'>
                    <div className=' col-3'>
                        <FilterBy
                            priceFrom={priceFrom}
                            setPriceFrom={setPriceFrom}
                            priceTo={priceTo}
                            setPriceTo={setPriceTo} />
                    </div>
                    <div className=' col-9'>
                        {
                            product.map((item) => (
                                <Link to={`/products/${item._id}`} key={item._id} >
                                    <div className='row  bg-white product p-3 my-3'>
                                        <div className='col-2'>
                                            <img src={item.mainImage} className=' img-fluid' alt="" />
                                        </div>
                                        <div className='col-8'>
                                            <div className=' border-b pb-3 mb-2'>
                                                <h5>{item.title}</h5>
                                            </div>
                                            <div>
                                                <Stars stars={item.rating.rate} />
                                            </div>
                                            <div>
                                                <h5>${item.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search