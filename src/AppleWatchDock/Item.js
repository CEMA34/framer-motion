import * as React from "react";
import { motion, useMotionValue } from "framer-motion";
import { icon,device} from "./settings";
import { useIconTransform } from "./use-icon-transform";

export function Item({ row, col, planeX, planeY }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);


  const xOffset =
    col * (icon.size + icon.margin) +
    (row % 2) * ((icon.size + icon.margin) / 2);
  const yOffset = row * icon.size;


  const divIcon= document.querySelector(".icon")

  console.log(divIcon && divIcon.style.width)

  

   /*if(divIcon&&divIcon.style.scale < 1) {
    divIcon.style.opacity= "0.5"
  }*/
{/*divIcon && divIcon.style.left > 421 ? "0.5" : "1"*/}

  useIconTransform({ x, y, scale, planeX, planeY, xOffset, yOffset });

  return (
    <motion.div className="icon"
      style={{
        position: "absolute",
        left: xOffset,
        top: yOffset,
        x,
        y,
        scale,
        width: icon.size,
        height: icon.size,
        borderRadius: "50%",
        background: `white`,
        opacity: scale,
      }}
    />
  );
}
