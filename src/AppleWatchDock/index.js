import * as React from "react";
import { motion, useMotionValue } from "framer-motion";
import { Item } from "./Item";
import { device } from "./settings";


const grid = new Array(10).fill([0, 1, 2, 3, 4, 5, 6, 7]);


export function AppleWatchDock(props) {

  const x = useMotionValue(-225);
  const y = useMotionValue(-225);

  return (
    <motion.div initial={{scale:0.272, rotate:"-10deg"}}  className="device-outer-div">
    <div onClick={props.toggleAnimation} className="device" style={device}>
      <motion.div animate={props.animating ? {x:-159.12,y:-115.6}: {x:-586.48,y:-422.4}} transition={{ type: "spring" , mass:0.4,stiffness:80 }}
       
        style={{
          width: 1000,
          height: 1000,
          x,
          y,
          background: "transparent"
        }}
      >
        {grid.map((rows, rowIndex) =>
          rows.map(colIndex => (
            <Item row={rowIndex} col={colIndex} planeX={x} planeY={y} />
          ))
        )}
      </motion.div>
    </div>
    </motion.div>
  );
}
