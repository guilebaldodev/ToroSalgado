import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return ( 
    <>
        <div className="flex justify-between pt-6 items-center px-16 text-customOrange">
            <div className="flex space-x-2 items-center">
                <div className="rounded-full w-12 h-12 bg-customOrange items-center flex justify-center">
                    <Image src="/icons/white-logo.png" width={35} height={35}></Image>
                </div>
                <h4 className="text-3xl font-semibold">Toro Salgado</h4>
            </div>
            

            <div>
                <nav className="space-x-4 text-xl font-medium">
                        <Link href={"/clientes"}>Clientes</Link>
                        <Link href={"/clientes"}>Tutorial</Link>
                        <Link href={"/clientes"}>Galeria</Link>
                </nav>
            </div>

                <button className="py-2 px-4 rounded-2xl text-xl font-medium border border-[#dfdfe5] ">
                    Rentar
                </button>
        </div>
    
    </> );
}
 
export default Header;