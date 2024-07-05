import './Services.css'
const Services = () => {
    const service = [
        {
            id: 1,
            image: "./images/service.png",
            title: "Free Shipping",
            smtitle: "From all over EGYPT"
        },
        {
            id: 2,
            image: "./images/service-02.png",
            title: "Daily Surprise Offers",
            smtitle: "Save up to 25% off"
        },
        {
            id: 3,
            image: "./images/service-03.png",
            title: "Support 24/7",
            smtitle: "Shop with an expert "
        },
        {
            id: 4,
            image: "./images/service-04.png",
            title: "Affordable Prices",
            smtitle: "Get Factory direct price"
        },
        {
            id: 5,
            image: "./images/service-05.png",
            title: "Affordable Prices",
            smtitle: "Get Factory direct price"
        },
    ]
    return (
        <div className="row  py-5 serviecs">
            {
                service?.map((item) => (
                    <div key={item.id} className="col-6  col-md-4 col-lg-3 my-3">
                        <div className='d-flex gap-2 align-items-center'>
                            <div>
                                <img src={item.image} className=' img-fluid ' alt="" />
                            </div>
                            <div className=' lh-sm'>
                                <span className=' title'>{item.title}</span>
                                <br />
                                <span className='subtitle text-black-50'>{item.smtitle}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Services