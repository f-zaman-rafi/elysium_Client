import { Link } from "react-router-dom";
import ServiceHome from "../Services/ServiceHome";
import Carousel from "./Carousel";

const Home = () => {

    return (
        <div className="text-whitel">
            <Carousel></Carousel>
            <p className="md:text-6xl text-xl text-center font-press my-20 md:my-40">Popular Services</p>
            <ServiceHome></ServiceHome>
            <div className='max-w-2xl mx-auto'>
                <Link to='/all-services'><p className='btn w-full my-5 bg-[#FFD700] text-black hover:bg-transparent hover:text-[#FFD700]'>All Services</p></Link>
            </div>
        </div>
    );
};

export default Home;