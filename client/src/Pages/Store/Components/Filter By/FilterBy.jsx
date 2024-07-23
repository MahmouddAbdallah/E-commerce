import { ContextState } from '../context/ContextState'
// import Colors from './Colors/Colors'
import './FilterBy.css'
const FilterBy = () => {
    const { priceFrom, setPriceFrom, priceTo, setPriceTo, } = ContextState()
    return (
        <div className=" p-2 bg-white rounded mt-3 filterby">
            <div className='mb-4'>
                <h6>Fliter By</h6>
            </div>
            <div className='ps-1'>
                <div>
                    <div className=''>
                        <h6>Price</h6>
                    </div>
                    <form className="d-flex filter-price ">
                        <div className='w-100 d-flex gap-1 mx-1' >
                            <span className=' text-black-50'>$</span>
                            <input
                                value={priceFrom}
                                onChange={(e) => { setPriceFrom(e.target.value) }}
                                type="text"
                                placeholder='From'
                                className=' filter-price-input w-100 px-2 py-1 text-black-50' />
                        </div>
                        <div className='w-100 d-flex gap-1 mx-1'>
                            <span className=' text-black-50'>$</span>
                            <input
                                value={priceTo}
                                onChange={(e) => { setPriceTo(e.target.value) }}
                                type="text"
                                placeholder='To'
                                className=' filter-price-input w-100 px-2 py-1 text-black-50' />
                        </div>
                    </form>
                </div>
                <div className='pt-4'>
                    {/* <div className=''>
                        <h6>Color</h6>
                    </div>
                    <div>
                        <Colors />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default FilterBy