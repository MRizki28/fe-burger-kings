import React, { useState, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import axios from "axios";

const MenuBase = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [menuData, setDataMenu] = useState([]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isDescriptionHidden = screenWidth >= 200 && screenWidth <= 768;


    useEffect(() => {
        axios.get("http://localhost:8000/api/v2/menu")
            .then(res => {
                console.log('data disini', res);
                setDataMenu(res.data.data)
            }).catch(
                err => console.log(err)
            )
    }, [])
    return (
        <div className="container mx-auto px-4 2xl:px-56 pt-10 pb-16">
            <div className="header text-center">
                <h2 className="font-flameBold text-[32px] text-[#8b542f]">Menus</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {menuData.map((data, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <Card className="w-full bg-[#fff] box flex flex-col" style={{ height: '100%' }}>
                            <CardHeader shadow={false} floated={false} className="h-[9rem] md:h-[13rem]">
                                <img
                                    src={`http://localhost:8000/api/v2/menu/gambar-menu/${data.gambar_menu}`}
                                    alt="card-image"
                                    className="h-full w-full object-cover  hover:scale-110 transform transition-transform duration-300 ease-in-out rounded-2xl"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 grid md:flex items-center justify-between">
                                    <Typography className="font-medium  text-[#8b542f] text-[21px] font-flameBold">
                                        {data.nama_menu}
                                    </Typography>
                                    <Typography className="font-medium text-[#8b542f] text-[21px] font-flameBold">
                                        {data.harga}
                                    </Typography>
                                </div>
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className={`font-normal opacity-75 font-flameReguler lg:text-[16px] text-[#502314] ${isDescriptionHidden ? 'hidden' : ''}`}
                                >
                                    {data.description}
                                </Typography>
                            </CardBody>
                            <div className="flex-grow"></div>
                            <CardFooter className="pt-0">
                                <Button
                                    ripple={false}
                                    fullWidth={true}
                                    className="bg-[#ed7801] text-white text-[16px] font-flameReguler shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                >
                                    BUY
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>

        </div>
    );
};




export default MenuBase
