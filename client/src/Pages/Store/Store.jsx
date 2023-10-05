import './Store.css'
import Products from './Components/Products/Products'
import Sidebar from './Components/Sidebar/Sidebar'
import { ContextState } from './Components/context/ContextState'
const Store = () => {
    const { loading } = ContextState()

    return (
        <div className="store">
            {loading ?
                <div className=' container py-5 '>
                    <div className='row'>
                        <div className='col-lg-3 '>
                            <Sidebar />
                        </div>
                        <div className='col-lg-9 '>
                            <Products />
                        </div>
                    </div>
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

export default Store