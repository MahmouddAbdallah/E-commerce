import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { cart } from '../redux/features/product'

const createProvider = createContext()

export const MainContextState = ({ children }) => {
    const [user, setUser] = useState("")
    const token = localStorage.getItem("token")
    const userId = localStorage.getItem("userId")
    const disptach = useDispatch()
    const config = useMemo(() => {
        return {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    }, [token])

    const getUser = useCallback(
        async () => {
            try {
                const { data } = await axios.get(`/api/v1/user/${userId}`, config)
                setUser(data.user)
            } catch (error) {
                console.error(error);
            }
        }, [userId, config]
    )

    useEffect(() => {
        if (userId) {
            getUser();
        }
    }, [getUser, userId])

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
        if (user) {
            getCart()
        }
    }, [getCart, user])
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

