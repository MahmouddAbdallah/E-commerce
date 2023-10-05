import './Home.css'
import Hero from './component/Hero/Hero'
import Wrapper from './component/Wrapper/Wrapper'
const Home = () => {

    return (
        <section className="pb-5 ">
            <div>
                <Hero />
            </div>
            <div>
                <Wrapper />
            </div>
        </section>
    )
}

export default Home