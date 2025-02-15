import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( <>
  <footer className="pt-8 bg-[#2B2B2B] text-white">
            <div className="text-center w-[60%] mx-auto custom-lg:w-[90%] ">
                <div className="flex justify-center items-center pb-2">
                    <Image className="mr-2" src="/icons/white-logo.png" alt="Logotipo de Solaria Software" width={40} height={40} />
                    <h3 className="font-medium text-2xl">Toro Salgado</h3>
                </div>
                <p>
                En Toro Salgado, llevamos la diversión a otro nivel con nuestro toro mecánico, ideal para amenizar fiestas, cumpleaños y eventos especiales. Nos comprometemos a brindar una experiencia segura y emocionante que hará que tu celebración sea inolvidable.
                </p>
            </div>

            <div className="w-[90%] mx-auto flex py-8 justify-evenly md:flex-col ">
       
                <div className="flex flex-col md:text-center pb-6">
                    <h4 className="text-lg pb-2 font-medium">Eventos</h4>
                    <Link className="text-white " href="/servicios/desarrollo-web">Cumpleaños</Link>
                    <Link className="text-white " href="/servicios/eccomerce">Reuniones</Link>
                    <Link className="text-white " href="/servicios/software">Fiestas infantiles</Link>
                </div>
                <div className="flex flex-col md:text-center pb-6">
                    <h4 className="pb-2 text-lg font-medium">Empresa</h4>
                    <Link className="text-white" href="/casos-de-exito">Clientes</Link>
                    <Link className="text-white" href="/nosotros">Tutorial</Link>
                    <Link className="text-white" href="/contacto">Galeria de fotos</Link>
                </div>
                <div className="flex flex-col md:text-center ">
                    <h4 className="pb-2 text-lg font-medium ">Contacto</h4>
                    <ul className="gap-y-1 flex flex-col ">
                        <li className="flex gap-4 items-center md:justify-center ">
                            <Image src="/icons/phone-icon.png" alt="Ícono de teléfono" width={20} height={20} />
                            (+52) 7443112193
                        </li>
                        <li className="flex gap-4 items-center md:justify-center">
                            <Image src="/icons/email-icon.png" alt="Ícono de correo electrónico" width={20} height={20} />
                            torosalgado@gmail.com
                        </li>
                        <li className="flex gap-4 items-center md:justify-center">
                            <Image src="/icons/ubication-white.png" alt="Ícono de ubicación" width={20} height={20} />
                            Acapulco Guerrero, México
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </> );
}
 
export default Footer;