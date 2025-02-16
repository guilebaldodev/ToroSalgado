"use client"

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

const Header = () => {
    const [MobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    if (MobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [MobileNav]);


    return ( 
    <>

        {
            MobileNav && <MobileMenu onClose={()=>{
                setMobileNav(false)
            }}></MobileMenu>

        }
        
        <div className="flex justify-between pt-6 items-center px-16 text-customOrange lg:px-12 md:!px-6">
            <div className="flex space-x-2 items-center">
                <div className="rounded-full w-12 h-12 bg-customOrange items-center flex justify-center">
                    <Image src="/icons/white-logo.png" width={35} height={35}></Image>
                </div>
                <h4 className="text-3xl custom-lg:text-2xl  font-semibold">Toro Salgado</h4>
            </div>
            

            <div className="custom-lg:hidden">
                <nav className="space-x-4 text-xl font-medium">
                        <Link href={"#testimonios"}>Clientes</Link>
                        <Link href={"#tutorial"}>Tutorial</Link>
                        <Link href={"#galeria"}>Galeria</Link>
                </nav>
            </div>
{/* 
                <button className="py-2 px-4 rounded-2xl text-xl font-medium border border-[#dfdfe5] custom-lg:hidden">
                    Reservar
                </button> */}

            <Image onClick={()=>{
                console.log("Click")
                setMobileNav(true)
            }} className="cursor-pointer hidden custom-lg:flex" src={"/icons/black-burger.png"} width={32} height={32}></Image>
        </div>
    
    </> );
}
 
export default Header;