import { useEffect, useState } from "react";
import ShowProduct from "../../Components/Products/ShowProduct";
import About from "../About/About";
import Banner from "./Banner";


const Home = () => {
    const [sunglasses, setSunglasses] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses')
        .then( res => res.json())
        .catch( data => setSunglasses(data))

    } , [])
    return (
        <>
            <Banner></Banner>
            <ShowProduct name={'Top Rated'} sunglasses={sunglasses.slice(5, 10)} />
            <ShowProduct name={'Best Sellers'} sunglasses={sunglasses.slice(0, 5)} />
            <About />
        </>
    );
};

export default Home;