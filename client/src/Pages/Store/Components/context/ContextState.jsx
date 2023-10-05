import { createContext, useCallback, useContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import axios from 'axios'


const CreateContext = createContext()
export const ContextProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const getProducts = useCallback(async () => {
        try {
            const { data } = await axios.get(`/api/v1/product?page=${page}`)
            setProducts(data.products);
            setLoading(true)
        } catch (error) {
            console.error(error);
        }
    }, [page])
    useEffect(() => {
        getProducts()
    }, [getProducts])
    const getCategorie = async () => {
        try {
            const { data } = await axios.get("/api/v1/category")
            setCategories(data.categories);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getCategorie()
    }, [])

    return (
        <CreateContext.Provider value={{ products, categories, setPage, page, loading }}>
            {children}
        </CreateContext.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.element.isRequired
}

export const ContextState = () => {
    return (
        useContext(CreateContext)
    )
}

