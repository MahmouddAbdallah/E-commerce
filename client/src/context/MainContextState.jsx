import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

const createProvider = createContext()

export const MainContextState = ({ children }) => {
    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
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
        useContext(createContext)
    )
}

