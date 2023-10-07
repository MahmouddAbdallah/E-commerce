import { createContext, useCallback, useContext, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { cart } from '../redux/features/product'

const createProvider = createContext()

export const MainContextState = ({ children }) => {
    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))
    const disptach = useDispatch()

    const config = useMemo(() => {
        return {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    }, [token])
    const getCart = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/v1/cart/${user._id}/user`, config)
                disptach(cart(data))
            } catch (error) {
                console.error(error);
            }
        }, [config, disptach, user]
    )
    useEffect(() => {
        getCart()
    }, [getCart])
    return (
        <createProvider.Provider value={{ token, user, config }}>
            {children}
        </createProvider.Provider>
    )
}

MainContextState.propTypes = {
    children: PropTypes.element.isRequired
}

export const DataContext = () => {
    return (
        useContext(createProvider)
    )
}

