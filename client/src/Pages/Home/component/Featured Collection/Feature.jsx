import Product from '../../../../Component/Product/Product'
import './Feature.css'
import Cards from './component/Cards'

const Feature = () => {
    const feature = [
        {
            id: 1,
            image: "./images/headphone.jpg",
            title: "Haveils",
            description: "Kids Headphoes Bulk 10 Pack Multi Colord For",
            star: 4,
            price: "$ 150"
        },
        {
            id: 2,
            image: "./images/camera.jpg",
            title: "Sony",
            description: " camera is a high-quality digital camera that offers exceptional image and video capturing capabilities.",
            items: "8 itmes",
            srar: 3,
            price: "$ 150"
        },
        {
            id: 3,
            image: "./images/laptop.jpg",
            title: "Computers & Laptop",
            items: "8 itmes",
            srar: 3,
            price: "$ 150"
        },
        {
            id: 4,
            image: "./images/laptop.jpg",
            title: "Computers & Laptop",
            items: "8 itmes",
            srar: 3,
            price: "$ 150"
        },
        {
            id: 4,
            image: "./images/laptop.jpg",
            title: "Computers & Laptop",
            items: "8 itmes",
            srar: 3,
            price: "$ 150"
        },
        {
            id: 4,
            image: "./images/laptop.jpg",
            title: "Computers & Laptop",
            items: "8 itmes",
            srar: 3,
            price: "$ 150"
        },
    ]
    return (
        <div className='features'>
            <div className=' mt-5 TitleHead'>
                <h4> Featured Collection</h4>
            </div>
            <div className=' productFeatures'>
                <div className='  row justify-content-lg-center rounded gap-lg-2'>
                    {feature.map((item) => (
                        <Product
                            className=" my-3 col-6 col-md-4 col-lg-2 "
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            desc={item.description}
                            stars={item.star}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
            <div >
                <Cards />
            </div>
        </div>
    )
}

export default Feature