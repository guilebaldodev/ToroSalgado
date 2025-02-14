"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgressExample({step}) {
  const percentage = (step)*33.3;
  if(step>3){
    step=3
  }

  return (
      <div className="w-10 h-10">
        <CircularProgressbar
          value={percentage+1}
          text={`${step}/3`}
          styles={buildStyles({
            textColor: "#000",
            pathColor: "#FE572B",
            textSize: "30px"
          })}
        />
      </div>
  );
}