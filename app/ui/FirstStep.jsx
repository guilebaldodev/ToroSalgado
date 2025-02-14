"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const FirstStep = ({setFormData,formData,errors}) => {
    
    const changeDate=(date)=>{
            
      setFormData({
        ...formData,
        date:date.toISOString()
      })
    }

    return ( 
    <>
    {errors.date && <p className="text-red-500 text-lg pl-6 pt-4">{errors.date}</p>}

    <div className="flex justify-center items-center">
      <Calendar
        onChange={changeDate}
        value={formData.date ? new Date(formData.date) : new Date()}
        locale="es-ES"
      />
    </div>

    </> );
}
 
export default FirstStep;