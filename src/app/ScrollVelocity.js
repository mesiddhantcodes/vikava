// ScrollVelocity.jsx
"use client";

import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) setWidth(ref.current.offsetWidth);
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

function VelocityRow({
  images,
  velocity,
  numCopies,
  parallaxClassName,
  scrollerClassName,
  imageWidth,
  imageHeight,
  imageObjectFit,
  imageClassName,
  reverse,
}) {
  const baseX = useMotionValue(0);

  const copyRef = useRef(null);
  const [singleCopyWidth, setSingleCopyWidth] = useState(0);

  useLayoutEffect(() => {
    function update() {
      if (copyRef.current) {
        setSingleCopyWidth(copyRef.current.offsetWidth);
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [images, imageWidth, imageHeight]);

  const copies = Array.from({ length: Math.max(2, numCopies) });

  const x = useTransform(baseX, (v) => `${v}px`);
  const direction = reverse ? -1 : 1;

  useAnimationFrame((t, delta) => {
    if (!singleCopyWidth) {
      // Move anyway until width is known
      const move = direction * velocity * (delta / 1000);
      baseX.set(baseX.get() + move);
      return;
    }

    // Constant movement, NO SCROLL EFFECT
    const move = direction * velocity * (delta / 1000);
    baseX.set(baseX.get() + move);

    // When container moves past one full copy, shift back
    if (direction === 1 && baseX.get() > 0) {
      baseX.set(baseX.get() - singleCopyWidth);
    } else if (direction === -1 && baseX.get() <= -singleCopyWidth) {
      baseX.set(baseX.get() + singleCopyWidth);
    }
  });

  return (
    <div className={parallaxClassName} style={{ overflow: "hidden" }}>
      <motion.div
        className={scrollerClassName}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          x,
        }}
      >
        {copies.map((_, copyIndex) => (
          <span
            key={copyIndex}
            ref={copyIndex === 0 ? copyRef : null}
            style={{ display: "flex", gap: 8, alignItems: "center" }}
          >
            {images.map((img, i) => (
              <img
                key={i + "-" + copyIndex}
                src={img}
                alt=""
                className={imageClassName}
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  objectFit: imageObjectFit,
                  display: "block",
                }}
              />
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ScrollVelocity({
  images = [],
  velocity = 100,
  numCopies = 4,
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
  imageWidth = 200,
  imageHeight = 120,
  imageObjectFit = "contain",
  imageClassName = "scroller-image",
}) {
  return (
    <div className="flex flex-col px-4 gap-0 w-full">
      {images.map((row, idx) => (
        <VelocityRow
          key={idx}
          images={row}
          velocity={velocity}
          numCopies={numCopies}
          parallaxClassName={parallaxClassName}
          scrollerClassName={scrollerClassName}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          imageObjectFit={imageObjectFit}
          imageClassName={imageClassName}
          reverse={idx % 2 === 0}
        />
      ))}
    </div>
  );
}
