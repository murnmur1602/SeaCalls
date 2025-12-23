'use client';

import Image from 'next/image';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const photos = [
  '/images/abb83e2ba131e055681fb6d9d526cc2cfddb2dad.png',
  '/images/c826716aaac1596962a0c9adb69e01002a32d9b4.png',
  '/images/f65fc889002f38cbc9b37dedd8e13dbc582f9fee.png',
  '/images/af21f700576bff6493469285dbee9a0e38057bb1.png',
  '/images/83b228c04a172651f9b214cab71ff7942ba0d07c.png',
  '/images/62457fbe49ee52d70677afcb805da99303541530.png',
  '/images/b5a8eecdebdf1c271602d8880c2a8a68d49c08d6.png',
  '/images/7798b690540feee8f5b0182440c203dfb4f02a25.png',
  '/images/925f3a3a87379c80d6f3142ed96b6726b36cf0f8.png',
  '/images/2d9599f260dfd552885c57189ec2f8fac9a46dc0.png',
  '/images/1e2bc1bd43b6993b664ab500df653ba43e87b04b.png',
  '/images/c40fbc63d505fe6449417d9a15f3c9143e82ba1f.png',
  '/images/38677bdcf18c20c9e0e9456f2a634b25305241af.png',
  '/images/ac0f2f9ab094708d8bd17bbb686ca42f31f6d811.png',
  '/images/5e2339ca7508f7783bf3f6b1795903e78cc15730.png',
  '/images/aff40174b95f11457f9eda88d846205da4ebfaff.png',
];

export default function GallerySection() {
  return (
    <section id="gallery" className="pt-20 md:pt-28 px-5 md:px-6 relative">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          backgroundImage: 'url(/images/paper-texture.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto',
          opacity: 0.4,
          mixBlendMode: 'multiply',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Masonry Grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}>
          <Masonry gutter="8px">
            {photos.map((photo, index) => (
              <div key={index} className="relative w-full rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={photo}
                  alt={`Sailing adventure ${index + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto"
                  sizes="(max-width: 750px) 100vw, (max-width: 900px) 50vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
