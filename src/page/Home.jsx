import React from "react";
import NavBar from "../components/Navbar";
import HeroPage from "../components/Hero";
import MenuBase from "../components/Menu";
import FooterBase from "../components/Footer";

const Home = () => {
    return (
        <>
        <div>
        <div className="pt-[3rem] lg:pt-[4rem]">
            <NavBar></NavBar>
            <HeroPage></HeroPage>
            <MenuBase></MenuBase>
            
        </div>
        <FooterBase></FooterBase>
        </div>
    
        </>
        

    )
}

export default Home