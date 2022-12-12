import { useMemo, useRef } from "react";
import { transform } from "framer-motion";
import { device, icon } from "./settings";


export function useIconTransform({
  x,
  y,
  scale,
  planeX,
  planeY,
  xOffset,
  yOffset
}) {

  const xScale = useRef(1);
  const yScale = useRef(1);

 

  useMemo(() => {
  
    const transform = v => {

      const screenOffset = v + xOffset + 20;

      xScale.current = mapScreenXToScale(screenOffset);
      const newScale = Math.min(xScale.current, yScale.current);


      scale.set(newScale);
      x.set(mapScreenToXOffset(screenOffset));
    };

    return planeX.onRenderRequest(transform);
  }, [planeX, scale, x, xOffset]);

  useMemo(() => {
    // Transform y and scale based on planeY
    const transform = v => {
      const screenOffset = v + yOffset + 20;
      yScale.current = mapScreenYToScale(screenOffset);
      const newScale = Math.min(xScale.current, yScale.current);
      scale.set(newScale);
      y.set(mapScreenToYOffset(screenOffset));
    };

    return planeY.onRenderRequest(transform);
  }, [planeY, scale, y, yOffset]);
}


const createScreenRange = axis => [
  -60,
  80,
  device[axis] - (icon.size + icon.margin) / 2 - 80,
  device[axis] - (icon.size + icon.margin) / 2 + 60
];

const scaleRange = [0, 1, 1, 0];
const xRange = createScreenRange("width");
const yRange = createScreenRange("height");
const mapScreenToXOffset = transform(xRange, [50, 0, 0, -50]);
const mapScreenToYOffset = transform(yRange, [50, 0, 0, -50]);
const mapScreenXToScale = transform(xRange, scaleRange);
const mapScreenYToScale = transform(yRange, scaleRange);
