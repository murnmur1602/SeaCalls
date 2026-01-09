"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ColumnItem {
  src: string;
  ratio: number;
}

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

// Статичная сетка для мобильных с фиксированными размерами
const gridLayout = [
  { size: "tall", span: "row-span-2" },
  { size: "square", span: "row-span-1" },
  { size: "tall", span: "row-span-2" },
  { size: "square", span: "row-span-1" },
  { size: "wide", span: "row-span-1" },
  { size: "square", span: "row-span-1" },
  { size: "tall", span: "row-span-2" },
  { size: "square", span: "row-span-1" },
  { size: "square", span: "row-span-1" },
];

const ROTATION_INTERVAL = 4000;

export default function GallerySection() {
  const [photoIndices, setPhotoIndices] = useState(() =>
    Array.from({ length: gridLayout.length }, (_, i) => i % photos.length)
  );
  const [lastChangedPosition, setLastChangedPosition] = useState<number | null>(
    null
  );
  const [isMobile, setIsMobile] = useState(false);
  const [columnsCount, setColumnsCount] = useState(3);
  const [photoMeta, setPhotoMeta] = useState<{ src: string; ratio: number }[]>(
    []
  );
  const [desktopColumns, setDesktopColumns] = useState<ColumnItem[][]>([]);
  const desktopContainerRef = useRef<HTMLDivElement>(null);

  // Определяем мобильное устройство
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setColumnsCount(width >= 1024 ? 4 : 3);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  // Ротация только для мобильных
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setPhotoIndices((prev) => {
        const newIndices = [...prev];
        let positionToChange;

        do {
          positionToChange = Math.floor(Math.random() * gridLayout.length);
        } while (
          positionToChange === lastChangedPosition &&
          gridLayout.length > 1
        );

        setLastChangedPosition(positionToChange);

        let newPhotoIndex;
        do {
          newPhotoIndex = Math.floor(Math.random() * photos.length);
        } while (newIndices.includes(newPhotoIndex));

        newIndices[positionToChange] = newPhotoIndex;
        return newIndices;
      });
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [lastChangedPosition, isMobile]);

  // Собираем соотношения сторон для балансировки столбцов на десктопе
  useEffect(() => {
    if (isMobile) return;

    let cancelled = false;

    const loadMeta = async () => {
      const entries = await Promise.all(
        photos.map(
          (src) =>
            new Promise<{ src: string; ratio: number }>((resolve) => {
              const img = new window.Image();
              img.onload = () => {
                const ratio = img.naturalHeight / img.naturalWidth || 1;
                resolve({ src, ratio });
              };
              img.onerror = () => resolve({ src, ratio: 1 });
              img.src = src;
            })
        )
      );

      if (!cancelled) {
        setPhotoMeta(entries);
      }
    };

    loadMeta();
    return () => {
      cancelled = true;
    };
  }, [isMobile]);

  // Простая балансировка по текущей суммарной высоте колонок
  useEffect(() => {
    if (isMobile || photoMeta.length === 0) return;

    const cols: ColumnItem[][] = Array.from({ length: columnsCount }, () => []);
    const heightsRatio = Array(columnsCount).fill(0);
    const heightsPx = Array(columnsCount).fill(0);

    const gapPx = 12; // gap-3 ~ 12px
    const containerWidth = desktopContainerRef.current?.clientWidth || 0;
    const colWidth = containerWidth
      ? (containerWidth - gapPx * (columnsCount - 1)) / columnsCount
      : 0;

    photoMeta.forEach(({ src, ratio }) => {
      let target = 0;
      for (let i = 1; i < columnsCount; i++) {
        if (heightsRatio[i] < heightsRatio[target]) target = i;
      }

      const alreadyHasItems = cols[target].length > 0;
      if (alreadyHasItems) {
        heightsPx[target] += gapPx;
      }

      cols[target].push({ src, ratio });
      heightsRatio[target] += ratio;
      heightsPx[target] += colWidth ? ratio * colWidth : ratio;
    });

    setDesktopColumns(cols);
  }, [isMobile, photoMeta, columnsCount]);

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
        {/* Мобильная версия - статичная сетка с анимацией */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 auto-rows-[200px] gap-3">
            {gridLayout.map((cell, position) => {
              const photoIndex = photoIndices[position];

              return (
                <div
                  key={`cell-${position}`}
                  className={`relative ${cell.span} rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 group`}
                >
                  <Image
                    key={`photo-${photoIndex}`}
                    src={photos[photoIndex]}
                    alt={`Sailing adventure ${photoIndex + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 animate-fadeIn"
                    sizes="50vw"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Десктопная версия - сбалансированные колонки */}
        <div className="hidden md:block" ref={desktopContainerRef}>
          {desktopColumns.length > 0 ? (
            <div className="flex gap-3">
              {desktopColumns.map((col, colIdx) => (
                <div key={colIdx} className="flex-1 flex flex-col gap-3">
                  {col.map((item, index) => (
                    <div
                      key={`${item.src}-${index}`}
                      className="relative w-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                    >
                      <Image
                        src={item.src}
                        alt={`Sailing adventure ${index + 1}`}
                        width={600}
                        height={800}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 1024px) 33vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative w-full rounded-lg overflow-hidden shadow-lg"
                >
                  <Image
                    src={photo}
                    alt={`Sailing adventure ${index + 1}`}
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
