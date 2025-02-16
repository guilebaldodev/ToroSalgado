import Link from "next/link";
import React from "react";

const WhatsAppButton = () => {

  const message = encodeURIComponent('¡Buenos dias! Me gustaría recibir más información sobre la renta del toro mecanico.');
  const whatsAppURL = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${message}`;


  return (
    <Link
      href={whatsAppURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Chatea con nosotros en WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        width="40"
        height="40"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 2.11.54 4.15 1.57 5.96L.05 23.9l6.08-1.55c1.72.94 3.69 1.44 5.87 1.44 6.63 0 12-5.37 12-12S18.63 0 12 0zm.01 21.86c-1.85 0-3.63-.5-5.2-1.44l-.37-.22-3.62.93.97-3.52-.24-.38c-.95-1.54-1.46-3.3-1.46-5.12 0-5.52 4.49-10.01 10.01-10.01 5.52 0 10.01 4.49 10.01 10.01s-4.49 10.01-10.01 10.01zM17.72 14.8c-.29-.15-1.73-.85-1.99-.94-.26-.1-.45-.15-.63.15-.19.3-.72.94-.89 1.13-.16.19-.33.21-.62.1-.29-.15-1.21-.45-2.3-1.43-.85-.76-1.42-1.7-1.58-2-.16-.3-.02-.46.12-.61.13-.13.3-.33.45-.5.15-.16.2-.26.3-.43.1-.19.05-.34-.03-.48-.09-.15-.63-1.53-.87-2.11-.23-.56-.47-.48-.63-.48-.16 0-.34-.01-.53-.01-.18 0-.48.07-.73.34-.26.27-1 1.01-1 2.43 0 1.42 1.02 2.8 1.16 2.99.15.19 2.01 3.06 4.88 4.29.68.29 1.21.46 1.63.59.68.22 1.29.19 1.78.12.54-.08 1.73-.71 1.98-1.41.25-.7.25-1.3.18-1.41-.08-.11-.26-.19-.54-.34z" />
      </svg>
    </Link>
  );
};

export default WhatsAppButton;