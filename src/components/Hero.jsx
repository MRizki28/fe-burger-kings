import React, { useEffect, useState } from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
};

const HeroPage = () => {

    const [ bannerData , setBannerData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/v3/banner/gambar")
            .then(res => {
                setBannerData(res.data.data)
                console.log(res)
            }).catch(
                err => console.log(err)
            )
    }, [])

    return (

        <Slider className="custom-slider" {...settings}>
            {bannerData.map((data, index) => (
                <div key={index} className="">
                    <div className="text-center md:text-left">
                        <img
                            src={data.url}
                            alt="testing"
                            className="w-full project-image  ease-in-out "
                        />
                    </div>
                </div>
            ))}
        </Slider>

    );
};

export default HeroPage;
