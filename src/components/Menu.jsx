import React, { useState, useEffect } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


const products = [
    {
        id: 1,
        name: "Double Mantul",
        price: "Rp.50.000",
        description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        image: "assets/img/menu/menu1.jpg",
    },
    {
        id: 2,
        name: "Gold Collections",
        price: "Rp.35.000",
        description: "Wireless earbuds with great sound quality and long battery life.Wireless earbuds with great sound quality and long battery life.Wireless earbuds with great sound quality and long battery life.",
        image: "assets/img/menu/menu1.jpg",
    },
    {
        id: 3,
        name: "Chease Burger",
        price: "Rp.90.000",
        description: "Wireless earbuds with great sound quality and long battery life .",
        image: "assets/img/menu/menu1.jpg",
    },
    {
        id: 3,
        name: "Chease Burger",
        price: "Rp.90.000",
        description: "Wireless earbuds with great sound quality and long battery life .",
        image: "assets/img/menu/menu1.jpg",
    },
    {
        id: 3,
        name: "Chease Burger",
        price: "Rp.90.000",
        description: "Wireless earbuds with great sound quality and long battery life .",
        image: "assets/img/menu/menu1.jpg",
    },
    {
        id: 3,
        name: "Chease Burger",
        price: "Rp.90.000",
        description: "Wireless earbuds with great sound quality and long battery life .",
        image: "assets/img/menu/menu1.jpg",
    },


];
const MenuBase = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Fungsi untuk mengupdate lebar layar saat layar diubah
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Tambahkan event listener untuk mengawasi perubahan lebar layar
        window.addEventListener("resize", handleResize);

        // Bersihkan event listener saat komponen tidak digunakan lagi
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Tentukan apakah deskripsi harus disembunyikan atau tidak berdasarkan lebar layar
    const isDescriptionHidden = screenWidth >= 200 && screenWidth <= 768;

    return (



        <div className="container mx-auto px-4 2xl:px-56 pt-10 pb-16">
            <div className="header text-center">
                <h2 className="font-flameBold text-[32px] text-[#8b542f]">Menus</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="flex justify-center items-center">
                        <Card className="w-full bg-[#fff] box flex flex-col" style={{ height: '100%' }}>
                            <CardHeader shadow={false} floated={false} className="h-[13rem]">
                                <img
                                    src={product.image}
                                    alt="card-image"
                                    className="h-full w-full object-cover"
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
