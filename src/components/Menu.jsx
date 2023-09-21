import React, { useState, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Avatar,
    IconButton,
} from "@material-tailwind/react";

import Loader, { Circles } from "react-loader-spinner";



const products = [
    {
        id: 1,
        name: "Double Mantul",
        price: "Rp.50.000",
        description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        image: "assets/img/menu/burger3.jpg",
    },
    {
        id: 2,
        name: "Gold Collections",
        price: "Rp.35.000",
        description: "Wireless earbuds with great sound quality and long battery life.Wireless earbuds with great sound quality and long battery life.Wireless earbuds with great sound quality and long battery life.",
        image: "assets/img/menu/burger4.jpg",
    },
    {
        id: 3,
        name: "Chease Burger",
        price: "Rp.90.000",
        description: "Wireless earbuds with great sound quality and long battery life .",
        image: "assets/img/menu/burger4.jpg",
    },
    {
        id: 3,
        name: "Chease Burger",
        price: "Rp.90.000",
        description: "Wireless earbuds with great sound quality and long battery life .",
        image: "assets/img/menu/burger4.jpg",
    },
    {
        id: 3,
        name: "Chease Burger",
        price: "Rp.90.000",
        description: "Wireless earbuds with great sound quality and long battery life .",
        image: "assets/img/menu/burger3.jpg",
    },
    {
        id: 3,
        name: "Chease Burger",
        price: "Rp.90.000",
        description: "Wireless earbuds with great sound quality and long battery life .",
        image: "assets/img/menu/burger3.jpg",
    },


];
const MenuBase = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

    const [open, setOpen] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState(null);


    const handleOpen = (product) => {
        setSelectedProduct(product);
        setOpen((cur) => !cur);
    };

    const [isLoading, setIsLoading] = useState(false); 
    const [whatsAppWindow, setWhatsAppWindow] = useState(null); 

    useEffect(() => {
        if (whatsAppWindow) {
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }
    }, [whatsAppWindow]);

    const handleBuyClick = (product) => {
        setIsLoading(true); 
        const whatsappURL = `https://api.whatsapp.com/send?phone=082290333669&text=Halo%20Saya%20mau%20pesan%20${encodeURIComponent(` ${product.name}`)}`;
        const whatsappWindow = window.open(whatsappURL, "_blank");
        setWhatsAppWindow(whatsappWindow);
    };

    return (
        <>
            <div className="container mx-auto px-4 2xl:px-56 pt-10 pb-16" id="menu">
                <div className="header text-center">
                    <h2 className="font-flameBold text-[32px] text-[#8b542f]">Menus</h2>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="flex justify-center items-center">
                            <Card className="w-full bg-[#fff] box flex flex-col" style={{ height: '100%' }}>
                                <CardHeader shadow={false} floated={false} className="h-[9rem] md:h-[13rem]">
                                    <img
                                        src={product.image}
                                        alt="card-image"
                                        className="h-full w-full object-cover"
                                        onClick={() => handleOpen(product)}
                                    />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-2 grid md:flex items-center justify-between">
                                        <Typography className="font-medium  text-[#8b542f] text-[21px] font-flameBold">
                                            {product.name}
                                        </Typography>
                                        <Typography className="font-medium text-[#8b542f] text-[21px] font-flameBold">
                                            {product.price}
                                        </Typography>
                                    </div>
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className={`font-normal opacity-75 ${isDescriptionHidden ? 'hidden' : ''}`}
                                    >
                                        {product.description}
                                    </Typography>
                                </CardBody>
                                <div className="flex-grow"></div>
                                <CardFooter className="pt-0">
                                    <Button
                                        ripple={false}
                                        fullWidth={true}
                                        className={`bg-[#ed7801] text-white text-[16px] font-flameReguler shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 ${isLoading ? "cursor-not-allowed" : ""}`}
                                        onClick={() => handleBuyClick(product)} 
                                        disabled={isLoading} 
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <Circles
                                                    type="Oval" 
                                                    color="#fff"
                                                    height={24} 
                                                    width={24} 
                                                />
                                            </div>
                                        ) : (
                                            "BUY"
                                        )}
                                    </Button>
                                </CardFooter>

                            </Card>
                        </div>
                    ))}
                    <Dialog size="xl" open={open} handler={handleOpen}>
                        <DialogBody divider={true} className="p-0 mb-10 mt-10">
                            {selectedProduct && (
                                <img
                                    alt="nature"
                                    className="lg:h-[48rem] w-full object-cover object-center"
                                    src={selectedProduct.image}
                                />
                            )}
                        </DialogBody>
                    </Dialog>
                </div>
            </div>


        </>

    );
};




export default MenuBase
