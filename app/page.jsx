import Image from "next/image";
import Testimonial from "./ui/Testimonial";
import Link from "next/link";
import { testimonios } from "./consts";
import RentalDetails from "./ui/RentalDetails";
import RentalForm from "./ui/RentalForm";
import ProductCarousel from "./ui/ProductCarrousel";
import WhatsAppButton from "./ui/WhatsAppButton";

export default function Home() {

  return (
    <>

      <WhatsAppButton></WhatsAppButton>


        <div
          className="flex  h-full
          gap-2
         w-[90%] mx-auto 
          header-div
        pb-8
        mt-8
        
        "
        >
          <div className="w-[60%] flex pt-8 flex-col justify-center header-texts">
            
            <h4 className="font-medium text-lg text-[#8E8F9E]">Tu Aliado para Fiestas Inolvidables
            </h4>
            <h1
              className="
                text-5xl py-4 leading-tight 
                font-semibold
                h1
                "
            >
              Toro Salgado: La Estrella de tus Eventos
            </h1>
            <p className="text-xl">
           
            Transforma tu fiesta en un evento único con nuestro toro mecánico. Perfecto para cumpleaños, eventos familiares o fiestas empresariales en Acapulco. ¡Seguridad y diversión aseguradas para todos!

            </p>
            {/*  Inicia Formulario */}
            <div className="">
              <RentalForm></RentalForm>
            </div>
            {/* Termina formulario */}
          </div>

          <div
            className="w-[40%]  header-img-div flex justify-center items-end
     mx-auto
           
            "
          >
            <Image
              src={"/img/header-bull.jpeg"}
              // src={"/img/removed.png"}
              className="header-img"
              style={{
                width: "90%",
                objectFit:"cover",
                borderRadius:"10px",
                height: "100%",
                maxHeight: "600px",
              }}
              width={600}
              height={600}
            ></Image>
          </div>
        </div>
      {/*  */}
      <div id="testimonios" className="py-8  mx-auto w-[90%]">
        <h2 className="text-4xl font-semibold py-8 custom-lg:text-3xl custom-sm:!text-2xl">
          Lo que nuestro clientes dicen
        </h2>
        <div className="grid grid-cols-3 gap-6 custom-lg:flex custom-lg:flex-col">
              {testimonios && testimonios.map((testimonio)=>(
              <Testimonial testimonial={testimonio}></Testimonial>
              ))}
        </div>
      </div>
      
      {/* EVENT DETAILS */}
      <div id="tutorial" className="bg-[#F7F8FC]">

      <div className="py-8  mx-auto w-[90%] ">
        <h2 className="text-4xl font-semibold py-8 custom-lg:text-3xl custom-sm:!text-2xl">Como funcionamos</h2>
        <div className="grid grid-cols-3 gap-6 md:flex md:flex-col">
          <div>
            <img src={"/img/to-book.svg"} className="w-[250px] h-[250px]"></img>

            <h2 className="text-2xl font-semibold py-4 custom-sm:text-xl">
              Ingresa los datos del evento
            </h2>

            <p className="text-xl custom-sm:text-lg">
            Elige el día, la hora y el lugar de tu evento con facilidad. Solo selecciona la fecha que más te convenga y asegura tu lugar para disfrutar de una experiencia única.
            </p>
          </div>

          <div>
            <img src={"/img/chat.svg"} className="w-[250px] h-[250px]"></img>

            <h2 className="text-2xl font-semibold py-4 custom-sm:text-xl">
              Reserva online en WhatsApp
            </h2>

            <p className="text-xl custom-sm:text-lg">
            Una vez elegido el día, serás redirigido a WhatsApp para confirmar tu reserva. Nuestro equipo estará listo para ayudarte a cerrar todos los detalles.

            </p>
          </div>

          <div>
            <img src={"/img/party.svg"} className="w-[250px] h-[250px]"></img>

            <h2 className="text-2xl font-semibold py-4 custom-sm:text-xl">
            Disfruta del día
            </h2>

            <p className="text-xl custom-sm:text-lg">
            Llega el día de tu evento y disfruta al máximo de tu experiencia con el toro mecánico. ¡Todo estará listo para que pases un día inolvidable!
            </p>
          </div>
        </div>
      </div>
      </div>


      {/*  */}

      <div className="py-8 flex  mx-auto w-[90%] gap-4 custom-lg:flex-col">
        <div className="w-[50%] custom-lg:w-[100%]">
          <h2 className="text-4xl font-semibold py-8 custom-lg:text-3xl custom-sm:!text-2xl">
            Somos una garantia de risas y diversion
          </h2>
        </div>

        <div className="w-[50%] custom-lg:w-[100%] grid grid-cols-2 gap-4 gap-y-8">
          <div>
            <div className="bg-orange-300 rounded-md flex items-center justify-center w-[80px] h-[80px] p-1">
              <Image
                src={"/icons/event.png"}
                width={100}
                height={100}
                style={{ width: "85%", maxWidth: "100px" }}
              ></Image>
            </div>
            <h3 className="text-2xl font-semibold pt-4 py-2 md:text-xl">+100 Eventos</h3>
            <p className="text-xl md:text-lg">Más de 100 celebraciones exitosas con Toro Salgado</p>
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
            <h3 className="text-2xl font-semibold pt-4 py-2 md:text-xl">Gran disponibilidad</h3>
            <p className="text-xl md:text-lg">¡Escoge la fecha que más te convenga!</p>
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
            <h3 className="text-2xl font-semibold pt-4 py-2 md:text-xl">En Cualquier Ubicación</h3>
            <p className="text-xl md:text-lg">Nos desplazamos donde sea necesario</p>
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
            <h3 className="text-2xl font-semibold pt-4 py-2 md:text-xl">Seguridad</h3>
            <p className="text-xl md:text-lg">Tu seguridad, nuestra prioridad</p>
          </div>
        </div>
      </div>

      {/*  */}

      <RentalDetails></RentalDetails>

      {/*  */}

      {/* Carrousel */}

      <div id="galeria" className="py-8  mx-auto w-[90%]">
        <h2 className="text-4xl font-semibold py-8 custom-lg:text-3xl custom-sm:!text-2xl">
          Galeria de fotos
        </h2>

        <ProductCarousel></ProductCarousel>
  
      </div>


    </>
  );
}
