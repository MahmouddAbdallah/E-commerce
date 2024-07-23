import './Search.css'
import { useCallback, useEffect, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    const [keyword, setKeyword] = useState("")
    const [search, setSearch] = useState([]);

    const navigate = useNavigate();

    const getSearching = useCallback(
        async () => {
            try {
                if (keyword) {
                    const { data } = await axios.get(`/api/v1/product?limit=7&keyword=${keyword}`)
                    setSearch(data.products)
                }
            } catch (error) {
                console.error(error);
            }
        }, [keyword]
    )
    useEffect(() => {
        getSearching()
    }, [getSearching])

    const handleSearch = (e) => {
        e.preventDefault()
        navigate({
            pathname: "search",
            search: `${createSearchParams({
                searchItem: `${keyword}`,
            })}`
        })
        setKeyword("")
    }
    const handleSearchProduct = (searchItem, category) => {
        navigate({
            pathname: "search",
            search: `${createSearchParams({
                searchItem: `${searchItem}`,
                category: `${category}`
            })}`
        })
        setKeyword("")
    }
    return (
        <div className=' w-100 position-relative'>
            <form onSubmit={handleSearch} className=" search  d-flex h-100" role="search">
                <input
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-100 h-100 search py-1 px-2 py-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search" />
                <button className="btn-search" type="submit">
                    <BiSearch />
                </button>
            </form>
            {keyword &&
                <div className='position-absolute w-100 bg-white show-search start-0 rounded-bottom-2'>
                    {search.map((item) => (
                        <div
                            onClick={() => {
                                handleSearchProduct(item.title.toLowerCase(), item.category.name)
                            }}
                            className=' text-black cursor-pointer px-2 py-2 d-flex align-items-center gap-2' key={item._id}>
                            <BiSearch />
                            <span className='d-block'>
                                {item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
                            </span>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Search