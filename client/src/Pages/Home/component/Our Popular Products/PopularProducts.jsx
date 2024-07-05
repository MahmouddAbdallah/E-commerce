import Product from '../../../../Component/Product/Product'
import './PopularProducts.css'

const PopularProducts = () => {
    const popularProducts = [
        {
            id: "1",
            image: "./images/special-1.png",
            images: ["./images/special-1.png", "./images/special-2.png"],
            subTitle: "Big Screen",
            title: "Smart Watch Series 7",
            brand: "Sony",
            oldPrice: '76.00',
            price: "60.00",
            priceExp: "56 Days",
            pieces: "145",
            stars: 3,
        },
        {
            id: "2",
            image: "./images/special-2.png",
            images: ["./images/special-2.png", "./images/special-3.png"],
            subTitle: "Big Screen",
            title: "Smart Watch Series 7",
            brand: "Sony",
            oldPrice: '76.00',
            price: "60.00",
            priceExp: "56 Days",
            pieces: "145",
            stars: 3,
        },
        {
            id: "3",
            image: "./images/special-3.png",
            images: ["./images/special-3.png", "./images/special-2.png"],
            subTitle: "Big Screen",
            title: "Smart Watch Series 7",
            brand: "Sony",
            oldPrice: '76.00',
            price: "60.00",
            priceExp: "56 Days",
            pieces: "145",
            stars: 3,
        },
        {
            id: "4",
            image: "./images/special-1.png",
            images: ["./images/special-3.png", "./images/special-2.png"],
            subTitle: "Big Screen",
            title: "Smart Watch Series 7",
            brand: "Sony",
            oldPrice: '76.00',
            price: "60.00",
            priceExp: "56 Days",
            pieces: "145",
            stars: 3,
        },
    ]
    return (
        <div>
            <div className=' mt-5 TitleHead'>
                <h4>Our Popular Products</h4>
            </div>
            <div className='  row'>
                {popularProducts?.map((item) => (
                    <Product
                        className=" my-3 col-6 col-md-4 col-lg-3 "
                        key={item.id}
                        {...item}
                    />
                ))}
            </div>
        </div>
    )
}

export default PopularProducts