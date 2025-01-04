import Image from "next/image";

const Testimonial = ({testimonial}) => {
    return ( 
    <>
        <div className="flex  flex-col justify-between border border-[#dfdfe5] p-5 rounded-md">
            <div >
            
            <div className="flex gap-1 pb-4">
            <Image width={25} height={25} src={"/icons/star.svg"}></Image>
            <Image width={25} height={25} src={"/icons/star.svg"}></Image>
            <Image width={25} height={25} src={"/icons/star.svg"}></Image>
            <Image width={25} height={25} src={"/icons/star.svg"}></Image>
            <Image width={25} height={25} src={"/icons/star.svg"}></Image>

            </div>
            
            <p className="pb-12 text-[22px] text-[#60606E]">{testimonial.comentario}</p>


            </div>

            <div className="flex">

                <div className="rounded-sm rounded-ful min-h-11 min-w-11 w-[45px] h-[45px] bg-customGreen flex items-center justify-center ">
                    <h4 className="text-white text-2xl">{testimonial.nombre[0]}</h4>
                </div>
                
                <div className="pl-4">
                    <h4 className="font-medium text-[22px]">{testimonial.nombre}</h4>
                    <p className="text-lg font-medium text-customGrey">{testimonial.fecha}</p>
                </div>


            </div>

        </div>
    
    </> ); 
}
 
export default Testimonial;