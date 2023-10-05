import Card from "./Card"

const Cards = () => {
    const Cards = [
        {
            id: 1,
            image: "./images/Smart_Watch_Series.png",
            subTitle: "Big Screen",
            title: "Smart Watch Series 7",
            price: "From $350 or 4501 EGP for 40 Hours",
        },
        {
            id: 1,
            image: "./images/Apple_laptop.png",
            subTitle: "Big Screen",
            title: "Smart Watch Series 7",
            price: "From $350 or 4501 EGP for 40 Hours",
        },
        {
            id: 1,
            image: "./images/Apple_laptop.png",
            subTitle: "Big Screen",
            title: "Smart Watch Series 7",
            price: "From $350 or 4501 EGP for 40 Hours",
        },
    ]
    return (
        <div className="pt-5 cards">
            <div className="row gap-lg-3 ">
                {
                    Cards.map((item, i) => {
                        return (
                            <Card
                                key={item.id}
                                className={` col-12 col-sm-6 col-lg-4 my-2 ${i == 0 ? "active" : ""}`}
                                {...item}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards  