import Features from "../components/Features"
import Hero from "../components/Hero"
import HomeCategory from "../components/HomeCategory"
import PopularProducts from "../components/PopularProducts"


const Home = () => {
    return (
        <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Hero />
            <Features />
            <HomeCategory />
            <PopularProducts />
        </div>
    )
}

export default Home