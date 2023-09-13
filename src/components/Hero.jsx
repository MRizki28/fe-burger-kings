import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

const ProjectData = [
    {
        imageSrc: "assets/img/hero/bg-1.jpg",

    },
    {
        imageSrc: "assets/img/hero/bg-2.jpg",

    },
    {
        imageSrc: "assets/img/hero/bg-3.jpg",

    },
    {
        imageSrc: "assets/img/hero/bg-4.jpg",

    },
    {
        imageSrc: "assets/img/hero/bg-5.jpg",

    },
];

const HeroPage = () => {
    return (

        <Slider className="custom-slider" {...settings}>
            {ProjectData.map((project, index) => (
                <div key={index} className="">
                    <div className="text-center md:text-left">
                        <img
                            src={project.imageSrc}
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
