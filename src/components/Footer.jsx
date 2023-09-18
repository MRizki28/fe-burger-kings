import { Typography } from "@material-tailwind/react";
import React from "react";

const FooterBase = () => {
    return (
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  py-6 text-center md:justify-between nav-bg">
            <div className="container mx-auto px-4 lg:px-80">
            <Typography color="blue-gray" className="font-normal font-flameReguler lg:text-[20px] text-white text-center">
                BURGER KING® DELIVERY
            </Typography>
            <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="span"
                        color="blue-gray"
                        className="font-normal font-flameReguler text-[16px] text-white "
                    >
                      📞 082290333669
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal  font-flameReguler text-[16px] text-white "
                    >
                       📧 muhammadrizkitkj123@gmail.com
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="span"
                        color="blue-gray"
                        className="font-normal font-flameReguler text-[16px] text-white "
                    >
                        Indonesia Sulawesi Tengah
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal font-flameReguler text-[16px] text-white "
                    >
                        IG
                    </Typography>
                </li>
            </ul>
            </div>
          
        </footer>
    )
}

export default FooterBase