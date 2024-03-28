import axios from "axios";
import Card from "./Card"
import { useEffect, useState } from "react";

const Cards = () => {
    const [featureProductsCards, setFeatureProductsCards] = useState([])

    const getProducts = async () => {
        try {
            const { data } = await axios.get(`/api/v1/product?limit=6&find={"section":"featureCard"}`)
            setFeatureProductsCards(data.products);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div className="pt-5 cards">
            <div className="row gap-lg-3 ">
                {
                    featureProductsCards.map((item, i) => {
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