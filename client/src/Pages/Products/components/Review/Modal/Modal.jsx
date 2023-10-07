import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import axios from 'axios'
import PropTypes from 'prop-types'
import { DataContext } from '../../../../../context/MainContextState'

const Modal = ({ productId }) => {

    const [stars, setStars] = useState(0);
    const [next, setNext] = useState(true);
    const [review, setReview] = useState("");
    const { user } = DataContext()
    const submitReview = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post("/api/v1/review", {
                product: productId,
                user: user._id,
                stars,
                message: review
            })
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <button type="button" className="btn btn-primary border-none" data-bs-toggle="modal" data-bs-target="#exampleModal">Add review</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">New message</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3 d-flex flex-column align-items-center justify-content-center ">
                                    <div className='w-100'>
                                        {
                                            next ?
                                                <div >
                                                    <div className='mb-4 mt-2'>
                                                        <h4 >
                                                            Give rate :
                                                        </h4>
                                                    </div>
                                                    <div className=' d-flex justify-content-center'>
                                                        {Array(Math.floor(stars))
                                                            .fill()
                                                            .map((_, i) => {
                                                                return (
                                                                    <button key={i}
                                                                        onClick={(e) => {
                                                                            e.preventDefault()
                                                                            setStars((i));
                                                                        }}
                                                                        className=' bg-transparent border-none outline-none px-2 mx-1'  >
                                                                        <AiFillStar size={40} className='star' />
                                                                    </button>
                                                                )
                                                            })
                                                        }
                                                        {Math.floor(stars) < 5 &&
                                                            Array(5 - Math.floor(stars))
                                                                .fill()
                                                                .map((_, i) => {
                                                                    return (
                                                                        <button key={i}
                                                                            onClick={(e) => {
                                                                                e.preventDefault()
                                                                                if (stars) {
                                                                                    setStars(stars + i + 1)
                                                                                } else {
                                                                                    setStars((i + 1));
                                                                                }
                                                                            }}
                                                                            className=' bg-transparent border-none outline-none px-2 mx-1'  >
                                                                            <AiFillStar size={40} className='empty-star ' />
                                                                        </button>
                                                                    )
                                                                })
                                                        }
                                                    </div>
                                                </div> :
                                                <div className=' w-100'>
                                                    <textarea
                                                        value={review}
                                                        onChange={(e) => { setReview(e.target.value) }}
                                                        className='w-100 resize-none rounded px-2 outline-none'
                                                        placeholder='write a review'></textarea>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            {next &&
                                <>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setNext(false)
                                        }}
                                        type="button" className="btn btn-primary border-none">
                                        Next
                                    </button>
                                </>
                            }
                            {
                                !next &&
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setNext(true)
                                        }}
                                        type="button" className="btn btn-secondary">
                                        prev
                                    </button>
                                    <button
                                        onClick={submitReview}
                                        type="button" className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        submit
                                    </button>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    productId: PropTypes.string
}

export default Modal