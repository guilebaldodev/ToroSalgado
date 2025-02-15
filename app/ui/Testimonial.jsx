import Image from "next/image";

const Testimonial = ({testimonial}) => {
    return ( 
    <>
        <div className="flex  flex-col justify-between border border-[#dfdfe5] p-5 md:p-3 rounded-md">
            <div >
            
            <div className="flex gap-1 pb-4">
            <Image alt="Icono de estrella" width={25} height={25} src={"/icons/star.svg"}></Image>
            <Image alt="Icono de estrella" width={25} height={25} src={"/icons/star.svg"}></Image>
            <Image alt="Icono de estrella" width={25} height={25} src={"/icons/star.svg"}></Image>
            <Image alt="Icono de estrella" width={25} height={25} src={"/icons/star.svg"}></Image>
            <Image alt="Icono de estrella" width={25} height={25} src={"/icons/star.svg"}></Image>

            </div>
            
            <p className="pb-12 custom-lg:pb-8 text-[22px] custom-lg:text-lg text-[#60606E]">{testimonial.comentario}</p>


            </div>

            <div className="flex">

                <div className="rounded-sm rounded-ful min-h-11 min-w-11 w-[45px] h-[45px] bg-customGreen flex items-center justify-center ">
                    <h4 className="text-white text-2xl  custom-lg:text-xl">{testimonial.nombre[0]}</h4>
                </div>
                
                <div className="pl-4">
                    <h4 className="font-medium text-[22px] custom-lg:text-xl">{testimonial.nombre}</h4>
                    <p className="text-lg custom-lg:text-base  font-medium text-customGrey">{testimonial.fecha}</p>
                </div>


            </div>

        </div>
    
    </> ); 
}
 
export default Testimonial;