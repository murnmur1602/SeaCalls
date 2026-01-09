"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  "/images/abb83e2ba131e055681fb6d9d526cc2cfddb2dad.png",
  "/images/c826716aaac1596962a0c9adb69e01002a32d9b4.png",
  "/images/f65fc889002f38cbc9b37dedd8e13dbc582f9fee.png",
  "/images/af21f700576bff6493469285dbee9a0e38057bb1.png",
  "/images/83b228c04a172651f9b214cab71ff7942ba0d07c.png",
  "/images/62457fbe49ee52d70677afcb805da99303541530.png",
  "/images/b5a8eecdebdf1c271602d8880c2a8a68d49c08d6.png",
  "/images/7798b690540feee8f5b0182440c203dfb4f02a25.png",
  "/images/925f3a3a87379c80d6f3142ed96b6726b36cf0f8.png",
  "/images/2d9599f260dfd552885c57189ec2f8fac9a46dc0.png",
  "/images/1e2bc1bd43b6993b664ab500df653ba43e87b04b.png",
  "/images/c40fbc63d505fe6449417d9a15f3c9143e82ba1f.png",
  "/images/38677bdcf18c20c9e0e9456f2a634b25305241af.png",
  "/images/ac0f2f9ab094708d8bd17bbb686ca42f31f6d811.png",
  "/images/5e2339ca7508f7783bf3f6b1795903e78cc15730.png",
  "/images/0a41fbc2bc69d14dec3e2adea3d82aa882bbdf2b.png",
  "/images/464d1cdf89768ad54b044cd95c1e22551393f48c.png",
  "/images/55eca80d5f1b5270334a45fc9636ef2306ee4375.png",
];

// Статичная сетка с фиксированными размерами для каждой позиции
const gridLayout = [
  { size: "tall", span: "row-span-2" }, // 0: высокая
  { size: "square", span: "row-span-1" }, // 1: квадратная
  { size: "tall", span: "row-span-2" }, // 2: высокая
  { size: "square", span: "row-span-1" }, // 3: квадратная
  { size: "wide", span: "row-span-1" }, // 4: широкая
  { size: "square", span: "row-span-1" }, // 5: квадратная
  { size: "tall", span: "row-span-2" }, // 6: высокая
  { size: "square", span: "row-span-1" }, // 7: квадратная
  { size: "square", span: "row-span-1" }, // 8: квадратная
];

const ROTATION_INTERVAL = 4000; // Меняем каждые 4 секунды

export default function GallerySection() {
  const [photoIndices, setPhotoIndices] = useState(() =>
    Array.from({ length: gridLayout.length }, (_, i) => i % photos.length)
  );
  const [lastChangedPosition, setLastChangedPosition] = useState<number | null>(
    null
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndices((prev) => {
        const newIndices = [...prev];
        let positionToChange;

        // Выбираем позицию, отличную от последней измененной
        do {
          positionToChange = Math.floor(Math.random() * gridLayout.length);
        } while (
          positionToChange === lastChangedPosition &&
          gridLayout.length > 1
        );

        setLastChangedPosition(positionToChange);

        let newPhotoIndex;
        // Находим фото, которое не отображается сейчас
        do {
          newPhotoIndex = Math.floor(Math.random() * photos.length);
        } while (newIndices.includes(newPhotoIndex));

        newIndices[positionToChange] = newPhotoIndex;
        return newIndices;
      });
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [lastChangedPosition]);

  return (
    <section id="gallery" className="pt-20 md:pt-28 px-5 md:px-6 relative">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: "url(/images/paper-texture.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          opacity: 0.4,
          mixBlendMode: "multiply",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Статичная CSS Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3 md:gap-4">
          {gridLayout.map((cell, position) => {
            const photoIndex = photoIndices[position];

            return (
              <div
                key={`cell-${position}`}
                className={`relative ${cell.span} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group`}
              >
                <Image
                  key={`photo-${photoIndex}`}
                  src={photos[photoIndex]}
                  alt={`Sailing adventure ${photoIndex + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 animate-fadeIn"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
