import PropTypes from 'prop-types'
import { AiFillStar } from 'react-icons/ai'

const Stars = ({ stars }) => {
    return (
        <div>
            <div className='d-flex gap- stars'>
                {Array(Math.floor(stars))
                    .fill()
                    .map((_, i) => {
                        return (
                            <div key={i}  >
                                <AiFillStar className='star' />
                            </div>
                        )
                    })
                }
                {Math.floor(stars) < 5 &&
                    Array(5 - Math.floor(stars))
                        .fill()
                        .map((_, i) => {
                            return (
                                <div key={i}  >
                                    <AiFillStar className='empty-star ' />
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

Stars.propTypes = {
    stars: PropTypes.number.isRequired
}

export default Stars