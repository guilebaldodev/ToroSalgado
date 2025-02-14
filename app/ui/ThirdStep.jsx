import Link from "next/link";

const ThirdStep = ({setFormData,formData,errors}) => {

  console.log(errors,"eeerros")

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData(
      (prevData)=>({
        ...prevData,
        [name]:value
      })
    )
  }

    return ( 
    
    <>
    
    <form className="p-6" >
      <div className="flex flex-col">
        <div className="flex flex-col w-[100%] pb-2">
          <label htmlFor="name" className="font-medium">Nombre</label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="customInput h-[36px] p-4 border rounded-md text-gray-600 focus:outline-none placeholder-gray-400"
            type="text"
            placeholder="Ej. Juan Perez"

          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div className="flex flex-col w-[100%] pb-4 ">
          <label htmlFor="surname" className="font-medium">Telefono de contacto</label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ej. 7443112193"
            className="customInput pl-4 h-[36px] border rounded-md p-2  text-gray-600 focus:outline-none placeholder-gray-400"
            type="text"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <div className="flex flex-col w-[100%] pb-4 ">
          <label htmlFor="surname" className="font-medium">Direccion del evento</label>
          <input
            id="location"
            name="location"
            value={formData.location}
            placeholder="Ej. Calle Falsa 123"
            onChange={handleChange}
            className="customInput pl-4 h-[36px] border rounded-md p-2  text-gray-600 focus:outline-none placeholder-gray-400"
            type="text"
          />
          {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
        </div>

      </div>

    </form>


    </> );
}
 
export default ThirdStep;