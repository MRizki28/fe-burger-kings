import React from "react";
import NavBar from "../components/Navbar";
import HeroPage from "../components/Hero";

const Home = () => {
    return (
        <div className="pt-[3rem] lg:pt-[4rem]">
            <NavBar></NavBar>
            <HeroPage></HeroPage>
        </div>

    )
}

export default Home