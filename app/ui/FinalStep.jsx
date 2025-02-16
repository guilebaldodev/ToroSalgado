import { formatDate } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const FinalStep = ({ formData }) => {






  return (
    <>
      <div className="px-6">
        <p className="py-2">
          Hemos recibido tu solicitud con los siguientes detalles:
        </p>

        <ul className="flex flex-col gap-y-3">
          <li className="flex gap-2">
            <Image src={"/icons/date.png"} width={24} height={20}></Image>
            <div>
              <span className="font-medium">Fecha:</span> {formatDate(formData.date)}
            </div>
          </li>
          <li className="flex gap-2">
          <Image src={"/icons/time.png"} width={25} height={21}></Image>
          <div>
            <span className="font-medium">Hora:</span> {formData.time}
          </div>
          </li>
          <li className="flex gap-2">
          <Image src={"/icons/location.png"} width={24} height={20}></Image>
            <div>
            <span className="font-medium">Ubicacion:</span> {formData.location}
            </div>
          </li>
        </ul>

        <p className="py-4">
          Para confirmar con tu reserva y el pago, puedes enviarnos un mensaje
          por{" "}
          <Link href="/ss" target="_blank" className="text-green-500 underline">
            WhatsApp
          </Link>
          . Si prefieres esperar, nos comunicaremos contigo lo más pronto
          posible.
        </p>
      </div>
    </>
  );
};

export default FinalStep;
