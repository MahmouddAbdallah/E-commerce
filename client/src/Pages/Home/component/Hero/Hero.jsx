import './Hero.css'

const Hero = () => {
    const slide = [
        {
            id: 1,
            image: "./images/main-banner.jpg",
            smtitle: 'SUPERCHARGED FOR PROS.',
            title: 'Special Sale',
            price: "From $150 or $7500 EGP"
        },
        {
            id: 2,
            image: "./images/main-banner-1.jpg",
            smtitle: 'SUPERCHARGED FOR PROS.',
            title: 'ipad S13+ Pro.',
            price: "From $200 or $10100 EGP"
        }
    ]
    const smallBanner = [
        {
            id: 1,
            image: "./images/catbanner-01.jpg",
            smtitle: 'BSET SALE',
            title: 'Laptops Max',
            price: "From $1620 or $23500 EGP"
        },
        {
            id: 2,
            image: "./images/catbanner-02.jpg",
            smtitle: '15% off',
            title: 'Smartwatch 7',
            price: "shop the latest band style and colors"
        },
        {
            id: 3,
            image: "./images/catbanner-03.jpg",
            smtitle: 'New arrival',
            title: 'Buy IPad Ait',
            price: "From $1720 or $20500 EGP"
        },
        {
            id: 4,
            image: "./images/catbanner-04.jpg",
            smtitle: 'free enoraving',
            title: 'AirPods Max',
            price: "High-fidelity playback & ultra-low distortion"
        },
    ]
    return (
        <div>
            <div className="container py-5 ">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                            <div className="carousel-inner">
                                {slide.map((item) => {
                                    return (
                                        <div key={item.id} className={`position-relative carousel-item ${item.id == 1 ? "active" : ""}`}>
                                            <img src={item.image}
                                                className=" img-fluid rounded-3"
                                                alt=""
                                            />
                                            <div className="position-absolute top-0 pt-5 ps-5 text-product-side">
                                                <h6 className=" text-uppercase">{item.smtitle}</h6>
                                                <h1>{item.title}</h1>
                                                <div className='container-detials'>
                                                    <p >{item.price}</p>
                                                </div>
                                                <div>
                                                    <button className='btn text-uppercase px-4 py-2'>Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="row mt-3 mt-lg-0">
                            {smallBanner.map((item) => {
                                return (
                                    <div key={item.id} className="col-6 mb-3">
                                        <div className=" position-relative">
                                            <img src={item.image}
                                                className=" img-fluid rounded-3"
                                                alt=""
                                            />
                                            <div className="position-absolute top-0 pt-3 ps-3 text-product">
                                                <h6 className=" text-uppercase">{item.smtitle}</h6>
                                                <h1>{item.title}</h1>
                                                <div className='container-detials'>
                                                    <p >{item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero