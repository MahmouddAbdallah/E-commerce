import { ContextProvider } from './Components/context/ContextState'
import Store from './Store'

const Index = () => {
    return (
        <ContextProvider >
            <Store />
        </ContextProvider>
    )
}

export default Index