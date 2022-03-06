import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Shows from "../components/Shows";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Shows />
            <Reviews />
        </div>
    )
}

export default Home;
