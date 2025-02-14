const SecondStep = ({setFormData,formData,errors}) => {
  const horas = [
    "09:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "4:00 pm",
    "5:00 pm",
    "6:00 pm",
    "7:00 pm",
    "8:00 pm",
    "9:00 pm",
    "10:00 pm",
  ];

  return (
    <>

      {errors.time && <p className="text-red-500 text-lg pl-6 pt-4">{errors.time}</p>}


      <div className="grid grid-cols-3 gap-4 p-6">
        {horas.map((item) => (
          <>
            <div onClick={()=>{
              console.log("hola",item)
              setFormData({
                ...formData,
                time:item,
              })
            }} className={`hover:bg-[#e9e9ea] cursor-pointer border border-[#dedede] p-1 text-center rounded ${formData.time==item?"bg-[#e9e9ea]":""}`}>
              <span className="text-lg  text-customOrange">
                {item}
              </span>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SecondStep;
