import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex font-flameReguler text-[13px] flex-col ">
                    <span className="block text-[#faaf18]">Delivery</span>
                    <span className="font-flameBold text-[25px] mt-[-5px]">Order</span>
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex font-flameReguler text-[13px] flex-col ">
                    <span className="block text-[#faaf18]">GetFresh</span>
                    <span className="font-flameBold text-[25px] mt-[-5px]">Promotions</span>
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex font-flameReguler text-[13px] flex-col ">
                    <span className="block text-[#faaf18]">Exclusive</span>
                    <span className="font-flameBold text-[25px] mt-[-5px]">Large Order</span>
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="fixed max-w-screen-3xl top-0 w-full z-50 py-0 lg:py-2 px-4 lg:px-8  rounded-none border-0 navbar-color nav-bg shadow-md">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium font-flameReguler"
                >
                    <img src="/assets/img/logo/burger-king.png" className="w-[40%] h-[40%] lg:w-[60%] lg:h-[60%]" alt="" />
                </Typography>
                <div className="hidden lg:block">{navList}</div>
                <a href="" className="hidden lg:inline-block
                ">
                    <span className="font-flameBold mr-5">LOGIN</span>
                    <span className="">Cart</span>
                </a>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <div className="container mx-auto mb-5">
                    {navList}
                    <a href="" className="font-flameBold ">Login</a>
                </div>
            </Collapse>
        </Navbar>
    );
}
export default NavBar