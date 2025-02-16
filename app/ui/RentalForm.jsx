"use client";

import { useState } from "react";
import CircularProgressExample from "./CircularProgress";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FinalStep from "./FinalStep";
import Image from "next/image";
import { formatDate } from "@/utils";

const RentalForm = () => {
  const OpenWhatsApp = () => {
    const message = encodeURIComponent(
      `¡Hola! Quisiera confirmar mi reservación con los siguientes detalles:\n\n` +
        `- Fecha: ${formatDate(formData.date)}\n` +
        `- Hora: ${formData.time}\n` +
        `- Nombre: ${formData.name}\n` +
        `- Teléfono: ${formData.phone}\n` +
        `- Dirección: ${formData.location}\n\n`
    );

    const whatsAppURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;
    window.open(whatsAppURL, "_blank");
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    phone: "",
    location: "",
  });

  const [errors, setErrors] = useState({
    time: "",
    name: "",
    phone: "",
    location: "",
  });

  const validateStep = (step) => {
    switch (step) {
      case 1:
        const dateError =
          formData.date.trim() === "" ? "La fecha es obligatoria" : "";
        setErrors({ date: dateError });

        return dateError === "";

      case 2:
        const timeError =
          formData.time.trim() === "" ? "La hora es obligatoria" : "";
        setErrors({ time: timeError });

        return timeError === "";
      case 3:
        const newErrors = {
          name: formData.name.trim() === "" ? "El nombre es obligatorio" : "",
          phone:
            formData.phone.trim() === ""
              ? "El teléfono es obligatorio"
              : !/^\d+$/.test(formData.phone.trim())
              ? "El teléfono solo debe contener números"
              : "",
          location:
            formData.location.trim() === ""
              ? "La dirección es obligatoria"
              : "",
        };
        setErrors(newErrors);

        return !Object.values(newErrors).some((error) => error !== "");
      default:
        return true;
    }
  };

  const modalOptions = {
    1: {
      title: "Reserva",
      subtitle: "Elige una fecha",
    },
    2: {
      title: "Reserva",
      subtitle: "Elige una hora",
    },
    3: {
      title: "Reserva",
      subtitle: "Ingresa tus datos",
    },
    4: {
      title: "Confirmacion de reserva",
      subtitle: `Estimado ${formData.name.trim().split(" ")[0]}`,
    },
  };

  const [modal, setModal] = useState(false);

  const [setps, setSetps] = useState(1);

  return (
    <>
      {modal && (
        <>
          <div className="fixed top-0 left-0 h-full w-full bg-black/40 z-[1000] flex items-center justify-center">
            {/* Contenido aquí */}
            <div className="bg-white max-h-[90vh] w-[500px] rounded-[10px] scrollbar-none custom-sm:h-[100vh] custom-sm:max-h-[100vh] custom-sm:rounded-none custom-sm:animate-slideIn">
              {/* Titulo */}

              <div className="bg-[#F3F6F9] p-2 rounded-[10px] flex justify-between items-center">
                <div className="gap-4 p-2 flex items-center">
                  {setps && setps < 4 && (
                    <CircularProgressExample
                      step={setps}
                    ></CircularProgressExample>
                  )}

                  <span className="text-xl font-medium">
                    {modalOptions[setps].title}
                  </span>
                </div>

                <Image
                  onClick={() => {
                    setModal(false);
                  }}
                  className="cursor-pointer mr-4"
                  src={"/icons/x.png"}
                  width={25}
                  height={25}
                ></Image>
              </div>

              {/* Subtitulos */}

              <div className="flex items-center gap-4 font-medium subtitulos pl-6 pt-6">
                {setps && setps < 4 && (
                  <div className="rounded-full bg-customOrange w-8 h-8 text-white flex items-center justify-center">
                    {setps}
                  </div>
                )}

                <span>{modalOptions[setps].subtitle}</span>
              </div>

              {/*  */}

              <div>
                {setps === 1 && (
                  <FirstStep
                    formData={formData}
                    errors={errors}
                    setFormData={setFormData}
                    onNext={() => setSetps(2)}
                  />
                )}
                {setps === 2 && (
                  <SecondStep
                    formData={formData}
                    errors={errors}
                    setFormData={setFormData}
                    onNext={() => setSetps(3)}
                  />
                )}
                {setps === 3 && (
                  <ThirdStep
                    formData={formData}
                    errors={errors}
                    setFormData={setFormData}
                    onNext={() => setSetps(4)}
                  />
                )}
                {setps === 4 && <FinalStep formData={formData}></FinalStep>}
              </div>

              <div className="flex justify-end pr-4 pb-4 w-[100%] gap-4 flex-wrap ">
                {setps > 0 && setps < 4 && (
                  <>
                    <button
                      disabled={setps == 1 ? true : false}
                      onClick={() => setSetps((prev) => prev - 1)}
                      className="bg-customOrange p-4 flex items-center text-white font-semibold h-[25px] px-8 tracking-wide rounded disabled:opacity-50"
                    >
                      <span>Atras</span>
                    </button>

                    <button
                      disabled={setps == 4 ? true : false}
                      onClick={() => {
                        console.log(formData);
                        if (validateStep(setps)) {
                          setSetps((prev) => prev + 1);
                        } else {
                          console.log("No puedes avanzar");
                        }
                      }}
                      className="bg-white p-4 flex items-center  border text-[#FE572B] border-[#FE572B] font-semibold h-[25px] px-8 tracking-wide rounded disabled:opacity-50 "
                    >
                      <span>Siguiente</span>
                    </button>
                  </>
                )}

                {setps == 4 && (
                  <button
                    onClick={() => {
                      OpenWhatsApp()
                    }}
                    className="bg-white p-4 flex items-center  border text-[#5BC65E] border-[#5BC65E] font-semibold h-[25px] px-8 tracking-wide rounded disabled:opacity-50 "
                  >
                    <span>Confirmar via WhatsApp</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <div className="flex flex-col pt-8">
        <div className="flex w-[100%] gap-4 flex-wrap custom-sm:flex-col">
          <button
            onClick={() => {
              setModal(true);
            }}
            className="bg-customOrange w-[40%] custom-sm:w-full text-white font-semibold h-[45px] px-8 tracking-wide rounded"
          >
            Reservar
          </button>

          <button
            onClick={() => scrollToSection("galeria")}
            className="bg-white w-[40%] custom-sm:w-full    border text-[#FE572B] border-[#FE572B] font-semibold h-[45px] px-8 tracking-wide rounded"
          >
            Ver galeria
          </button>
        </div>
      </div>
    </>
  );
};

export default RentalForm;
