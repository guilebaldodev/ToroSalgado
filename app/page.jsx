import Image from "next/image";
import Testimonial from "./ui/Testimonial";
import Link from "next/link";
import { testimonios } from "./consts";
import RentalDetails from "./ui/RentalDetails";

export default function Home() {
  return (
    <>
      {/*  */}

        <div
          className="flex pt-2 h-full
         w-[90%] mx-auto 
        custom-lg:w-[90%] custom-lg:px-8
        md:flex-col-reverse
        sm:pt-0 
        xs:!px-4
        pb-8
        mt-16
        
        "
        >
          <div className="w-[60%] flex pt-8 flex-col md:w-[100%] ">
            
            <h4 className="font-medium text-lg text-[#8E8F9E]">Tu Aliado para Fiestas Inolvidables
            </h4>
            <h1
              className="
                text-5xl py-4 leading-tight 
                font-semibold
                custom-lg:text-4xl
                sm:!text-3xl
                xs:!text-2xl
                "
            >
              Toro Salgado: La Estrella de tus Eventos
            </h1>
            <p className="text-xl">
           
            Transforma tu fiesta en un evento único con nuestro toro mecánico. Perfecto para cumpleaños, eventos familiares o fiestas empresariales en Acapulco. ¡Seguridad y diversión aseguradas para todos!

            </p>

            <div className="flex py-4 mt-3 gap-4 ">
              <button
                className="text-2xl px-4 py-2  border rounded-xl"
              >
                <span className="text-[#FE572B] border-[#FE572B]">
                Elige la fecha de tu evento

                </span>
              </button>
            </div>
          </div>

          <div
            className="w-[40%]  flex justify-center items-end
                md:w-[100%] mx-auto
                xs:w[100%]
            "
          >
            <Image
              src={"/img/bull-image.png"}
              style={{
                objectFit: "cover",
                width: "auto",
                borderRadius:"10px",
                height: "100%",
                maxHeight: "480px",
              }}
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
      {/*  */}
      <div className="py-8  mx-auto w-[90%]">
        <h2 className="text-4xl font-semibold py-8">
          Lo que nuestro clientes dicen
        </h2>
        <div className="grid grid-cols-3 gap-6">
              {testimonios && testimonios.map((testimonio)=>(
              <Testimonial testimonial={testimonio}></Testimonial>
              ))}
        </div>
      </div>

      <div className="py-8  mx-auto w-[90%] bg-[#F7F8FC]">
        <h2 className="text-4xl font-semibold py-8">Como funcionamos</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <img src={"/img/phone.webp"} className="w-[250px] h-[250px]"></img>

            <h2 className="text-2xl font-semibold py-4">
              Elige el dia de tu evento
            </h2>

            <p className="text-xl">
            Elige el día de tu evento con facilidad. Solo selecciona la fecha que más te convenga y asegura tu lugar para disfrutar de una experiencia única.
            </p>
          </div>

          <div>
            <img src={"/img/phone.webp"} className="w-[250px] h-[250px]"></img>

            <h2 className="text-2xl font-semibold py-4">
              Reserva online en WhatsApp
            </h2>

            <p className="text-xl">
            Una vez elegido el día, serás redirigido a WhatsApp para confirmar tu reserva. Nuestro equipo estará listo para ayudarte a cerrar todos los detalles.

            </p>
          </div>

          <div>
            <img src={"/img/phone.webp"} className="w-[250px] h-[250px]"></img>

            <h2 className="text-2xl font-semibold py-4">
            Disfruta del día
            </h2>

            <p className="text-xl">
            Llega el día de tu evento y disfruta al máximo de tu experiencia con el toro mecánico. ¡Todo estará listo para que pases un día inolvidable!

            </p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="py-8 flex  mx-auto w-[80%] gap-4">
        <div className="w-[50%]">
          <h2 className="text-4xl font-semibold py-8">
            Somos una garantia de risas y diversion
          </h2>
        </div>

        <div className="w-[50%] grid grid-cols-2 gap-4 gap-y-8">
          <div>
            <div className="bg-orange-300 rounded-md flex items-center justify-center w-[80px] h-[80px] p-1">
              <Image
                src={"/icons/event.png"}
                width={100}
                height={100}
                style={{ width: "85%", maxWidth: "100px" }}
              ></Image>
            </div>
            <h3 className="text-2xl font-semibold pt-4 py-2">+100 Eventos</h3>
            <p className="text-xl">Más de 100 celebraciones exitosas con Toro Salgado</p>
          </div>

          <div>
            <div className="bg-orange-300 rounded-md w-[80px] h-[80px] p-1">
              <Image
                src={"/icons/calendar.png"}
                width={100}
                height={100}
                style={{ width: "100%", maxWidth: "100px" }}
              ></Image>
            </div>
            <h3 className="text-2xl font-semibold pt-4 py-2">Gran disponibilidad</h3>
            <p className="text-xl">¡Escoge la fecha que más te convenga!</p>
          </div>

          {/*  */}

          <div>
            <div className="bg-orange-300 rounded-md flex items-center justify-center w-[80px] h-[80px] p-1">
              <Image
                src={"/icons/location.png"}
                width={100}
                height={100}
                style={{ width: "80%", maxWidth: "100px" }}
              ></Image>
            </div>
            <h3 className="text-2xl font-semibold pt-4 py-2">En Cualquier Ubicación</h3>
            <p className="text-xl">Nos desplazamos donde sea necesario</p>
          </div>

          <div>
            <div className="bg-orange-300 rounded-md w-[80px] h-[80px] p-1">
              <Image
                src={"/icons/safety.png"}
                width={100}
                height={100}
                style={{ width: "100%", maxWidth: "100px" }}
              ></Image>
            </div>
            <h3 className="text-2xl font-semibold pt-4 py-2">Seguridad</h3>
            <p className="text-xl">Tu seguridad, nuestra prioridad</p>
          </div>
        </div>
      </div>

      {/*  */}

      <RentalDetails></RentalDetails>

      {/*  */}
    </>
  );
}
