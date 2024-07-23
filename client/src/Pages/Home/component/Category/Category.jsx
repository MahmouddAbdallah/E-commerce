import { useEffect, useState } from 'react'
import axios from 'axios'
import './Category.css'
import { Link } from 'react-router-dom'

const Category = () => {
    const [categroies, setCategroyies] = useState([])
    const [loading, setLoading] = useState(false)
    const getCategories = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/v1/category")
            setCategroyies(data.categories)
            setLoading(true)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div>
            <div className=' mb-4 TitleHead'>
                <h4>Categories</h4>
            </div>
            {loading ?
                <div className="row bg-white categroy px-4 py-4">
                    {
                        categroies?.map((item) => (
                            <Link to={`/search?categoryId=${item._id}`} key={item._id} className="d-block col-6 col-lg-3 py-3 px-2 px-sm-3 ">
                                <div className='d-flex gap-2 align-items-center justify-content-between'>
                                    <div className=' lh-sm'>
                                        <span className=' title text-black'>{item.name}</span>
                                    </div>
                                    <div>
                                        <img src={item.image} className=' img-fluid rounded' alt="" />
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
                :
                <div className='spinner'>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Category