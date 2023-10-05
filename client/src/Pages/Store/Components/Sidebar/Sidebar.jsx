import FilterBy from "../Filter By/FilterBy"
import ShopBy from "../Shop By/ShopBy"

const Sidebar = () => {

    return (
        <div className=" pt-3">
            <div>
                <ShopBy />
            </div>
            <div>
                <FilterBy />
            </div>
        </div>
    )
}

export default Sidebar