import React from "react";
import Link from "next/link";
import Image from "next/image";

const MobileMenu = ({ onClose }) => {
  return (
    <div className="animate-slideIn fixed inset-0 bg-white z-50 flex flex-col">
      {/* Barra superior del menú móvil */}
      <div className="h-17 flex py-4 items-center justify-between w-[90%] mx-auto">
        <div className="flex space-x-2 items-center">
          <div className="rounded-full w-12 h-12 bg-customOrange items-center flex justify-center">
            <Image src="/icons/white-logo.png" width={35} height={35}></Image>
          </div>
          <h4 className="text-3xl custom-lg:text-2xl text-customOrange font-semibold">
            Toro Salgado
          </h4>
        </div>

        <Image
          className="cursor-pointer"
          src={"/icons/x.png"}
          width={32}
          height={32}
          alt="Cerrar menú"
          onClick={onClose}
        />
      </div>

      {/* Opciones del menú */}

      <div>
        <div className="flex flex-col mt-6 text-lg">
          <div className="border-b border-gray-200 cursor-pointer flex flex-col">
            <Link
              href="/clientes"
              onClick={onClose}
              className="ml-8 no-underline py-4 text-[20px] text-black font-medium"
            >
              Clientes
            </Link>
          </div>

          <div className="border-b border-gray-200 cursor-pointer flex flex-col">
            <Link
              href="/tutorial"
              onClick={onClose}
              className="ml-8 no-underline py-4 text-[20px] text-black font-medium"
            >
              Tuorial
            </Link>
          </div>

          <div className="border-b border-gray-200 cursor-pointer flex flex-col">
            <Link
              href="/galeria"
              onClick={onClose}
              className="ml-8 no-underline py-4 text-[20px] text-black font-medium"
            >
              Galeria
            </Link>
          </div>

          <div className="border-b border-gray-200 cursor-pointer flex flex-col">
            <Link
              href="/contacto"
              onClick={onClose}
              className="ml-8 no-underline py-4 text-[20px] text-black font-medium"
            >
              Reservar
            </Link>
          </div>
        </div>

        <Link
          href={"/ss"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatea con nosotros en WhatsApp"
          className="border-2 border-green-500  flex w-fit px-2 py-1 mt-4 ml-4 items-center rounded cursor-pointer no-underline text-green-500"
        >
          <img
            src="/icons/green-whatsapp.png"
            alt=""
            className="w-[25px] mr-2"
          />
          <p className="font-medium text-base">Habla con nosotros</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
