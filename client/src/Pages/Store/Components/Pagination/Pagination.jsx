import { ContextState } from "../context/ContextState"
import './Pagination.css'
const Pagination = () => {
    const { setPage, page } = ContextState()
    return (
        <div>
            <div className='pagination p-2 bg-white rounded d-flex justify-content-between'>
                <div>pagination</div>
                <div className=" d-flex gap-2">
                    <button className={`${page == 1 && "active"}`} onClick={() => { setPage(1) }}>1</button>
                    <button className={`${page == 2 && "active"}`} onClick={() => { setPage(2) }}>2</button>
                </div>
            </div>
        </div>
    )
}

export default Pagination