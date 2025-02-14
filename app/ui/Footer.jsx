import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return ( <>
  <footer className="pt-8 bg-[#2B2B2B] text-white">
            <div className="text-center   w-[60%] mx-auto">
                <div className="flex justify-center items-center pb-2">
                    <Image className="mr-2" src="/icons/white-logo.png" alt="Logotipo de Solaria Software" width={40} height={40} />
                    <h3 className="font-medium text-2xl">Toro Salgado</h3>
                </div>
                <p>
                    En nuestra agencia de desarrollo de software, nos enfocamos en ofrecer soluciones personalizadas que impulsan la transformación digital de tu empresa. Nos especializamos en crear aplicaciones robustas y eficientes.
                </p>
            </div>

            <div className="w-[90%] mx-auto flex py-8 justify-evenly">
       
                <div className="flex flex-col">
                    <h4 className="text-lg pb-2 font-medium">Servicio</h4>
                    <Link className="text-white " href="/servicios/desarrollo-web">Desarrollo web</Link>
                    <Link className="text-white " href="/servicios/eccomerce">e-commerce</Link>
                    <Link className="text-white " href="/servicios/software">Software a la medida</Link>
                </div>
                <div className="flex flex-col">
                    <h4 className="pb-2 text-lg font-medium">Empresa</h4>
                    <Link className="text-white" href="/casos-de-exito">Casos de éxito</Link>
                    <Link className="text-white" href="/nosotros">Nosotros</Link>
                    <Link className="text-white" href="/contacto">Agenda una cita</Link>
                </div>
                <div className="flex flex-col">
                    <h4 className="pb-2 text-lg font-medium">Contacto</h4>
                    <ul className="gap-y-1 flex flex-col">
                        <li className="flex gap-4 items-center">
                            <Image src="/icons/phone-icon.png" alt="Ícono de teléfono" width={20} height={20} />
                            (+52) 7443112193
                        </li>
                        <li className="flex gap-4 items-center">
                            <Image src="/icons/email-icon.png" alt="Ícono de correo electrónico" width={20} height={20} />
                            torosalgado@gmail.com
                        </li>
                        <li className="flex gap-4 items-center">
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