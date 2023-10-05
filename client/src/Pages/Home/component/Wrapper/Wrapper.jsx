import Brand from '../Brand/Brand'
import Category from '../Category/Category'
// import Feature from '../Featured Collection/Feature'
import PopularProducts from '../Our Popular Products/PopularProducts'
import SpecialProducts from '../Special Products/SpecialProducts'
import Services from '../services/Services'
import './Wrapper.css'

const Wrapper = () => {

    return (
        <div className="wrapper">
            <div className=' container'>
                <div>
                    <Services />
                </div>
                {/* categroy */}
                <div>
                    <Category />
                </div>
                <div>
                    {/* <Feature /> */}
                </div>
                <div>
                    <SpecialProducts />
                </div>
                <div>
                    <PopularProducts />
                </div>
                <div>
                    <Brand />
                </div>
            </div>
        </div>
    )
}

export default Wrapper