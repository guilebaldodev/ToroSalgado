"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const RentalDetails = () => {
  const [menu, setmenu] = useState("");

  const toggleMenu = (menuItem) => {
    setmenu(menu === menuItem ? "" : menuItem); 
  };
    

  return (
    <>
      <div className="flex w-[90%] mx-auto gap-8 py-16 md:flex-col md:py-4">
        <div className="w-[50%] md:w-[100%] md:flex md:justify-center md:items-center">
          <Image
            src={"/img/header-bull.jpeg"}
            style={{ width: "100%", maxWidth: "550px", borderRadius: "8px" }}
            width={500}
            height={500}
          ></Image>
        </div>

        <div className="w-[50%] md:w-[100%]">
          <h4 className="font-semibold text-2xl custom-lg:text-xl custom-sm:!text-lg  text-[#8E8F9E]">
            Toro Salgado
          </h4>
          <h2
            className="
                text-4xl py-2 leading-tight 
                font-semibold
                border-b border-solid border-[#e6e3e3]
                custom-lg:text-3xl
                custom-sm:!text-2xl
                "
          >
            Renta nuestro toro mecanico
          </h2>
          <p className="text-xl pt-4 pb-8 custom-lg:text-lg custom-sm:!text-base">
            Trata de mantenerte sobre el toro el mayor tiempo posible. Una
            actividad divertida para todas las edades que pondrá a prueba tu
            habilidad y equilibrio.
          </p>

          <h3
            className="
                text-3xl py-2 leading-tight 
                custom-lg:text-2xl
                custom-sm:text-xl
                font-semibold
                border-b border-solid border-[#e6e3e3]
                "
          >
            Caracteristicas
          </h3>

            <div className="flex flex-col">

              <div className="border-b pt-2 border-gray-300 ">
                <div
                  className="flex items-center p-2 w-full cursor-pointer"
                  onClick={() => toggleMenu("area")}
            
                >
                  <Image
                    className={`mr-2`}
                    src="/icons/ruler.png"
                    width={25}
                    height={25}
                  />
                  <span className="font-medium text-xl custom-lg:text-lg ">Area Requerida</span>
                </div>

                <div className={`content ${menu ==='area' ? "show" : ""}`}>
                  <div className="flex flex-col">
                    <span className="pl-2 pb-2  text-lg custom-lg:text-base">5m x 5m</span>
                  </div>
                </div>
              </div>

              <div className="border-b pt-2 border-gray-300 ">
                <div
                  className="flex items-center p-2 w-full cursor-pointer"
                    onClick={() => toggleMenu("participante")}
                
                >
                  <Image
                    className={`mr-4`}
                    src="/icons/person.png"
                    width={25}
                    height={25}
                  />
                  <span className="font-medium text-xl custom-lg:text-lg">Numero de Participantes</span>
                </div>

                <div className={`content ${menu == "participante" ? "show" : ""}`}>
                  <div className="flex flex-col">
                      <span className="pl-2  text-lg custom-lg:text-base">1 Persona</span>
                      <span className="pl-2 pb-2  text-lg custom-lg:text-base">A partir de 4 años</span>
                  </div>
                </div>
              </div>

              <div className="border-b pt-2 border-gray-300 ">
                <div
                  className="flex items-center p-2 w-full cursor-pointer"
                    onClick={() => toggleMenu("personal")}
                
                >
                  <Image
                    className={`mr-4`}
                    src="/icons/people.png"
                    width={25}
                    height={25}
                  />
                  <span className="font-medium text-xl custom-lg:text-lg">Personal de Apoyo</span>
                </div>

                <div className={`content ${menu == "personal" ? "show" : ""}`}>
                  <div className="flex flex-col">
                      <span className="pl-2 pb-2 text-lg custom-lg:text-base">2 Personas</span>
                  </div>
                </div>
              </div>

              <div className="border-b pt-2 border-gray-300 ">
                <div
                  className="flex items-center p-2 w-full cursor-pointer"
                    onClick={() => toggleMenu("household")}
               
                >
                  <Image
                    className={`mr-2`}
                    src="/icons/household.png"
                    width={25}
                    height={25}
                  />
                  <span className="font-medium text-xl custom-lg:text-lg">Requerimientos Tecnicos</span>
                </div>

                <div className={`content ${menu == "household" ? "show" : ""}`}>
           
                <div className="flex flex-col">
                      <span className="pl-2  text-lg custom-lg:text-base">Toma de luz ubicada máximo a 15 m del área de instalación</span>
                      <span className="pl-2  text-lg custom-lg:text-base">Montaje únicamente en superficie plana</span>
                      <span className="pl-2 pb-2   text-lg">Peso Máximo: 100 kg.
        </span>
                  </div>

                </div>
              </div>

            </div>

        </div>
      </div>
    </>
  );
};

export default RentalDetails;
