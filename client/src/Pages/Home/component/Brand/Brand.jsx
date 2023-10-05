
import Marquee from 'react-fast-marquee'

const Brand = () => {


    const brand = [
        {
            id: 1,
            img: "./images/brand-01.png",
            href: "www.apple.com"
        },
        {
            id: 2,
            img: "./images/brand-02.png",
            href: "www.apple.com"
        },
        {
            id: 3,
            img: "./images/brand-03.png",
            href: "www.apple.com"
        },
        {
            id: 4,
            img: "./images/brand-04.png",
            href: "www.apple.com"
        },
        {
            id: 5,
            img: "./images/brand-05.png",
            href: "www.apple.com"
        },
        {
            id: 6,
            img: "./images/brand-06.png",
            href: "www.apple.com"
        },
        {
            id: 7,
            img: "./images/brand-07.png",
            href: "www.apple.com"
        },
        {
            id: 8,
            img: "./images/brand-08.png",
            href: "www.apple.com"
        },
    ]
    return (
        <div className=' mt-5 bg-white rounded shadow-sm row'>
            <Marquee>
                {brand.map((item) => (
                    <div target='blank' key={item.id} className=' mx-4'>
                        <img src={item.img} className=' img-fluid' alt="" />
                    </div>
                ))}
            </Marquee>
            <a href=""></a>
        </div>
    )
}

export default Brand