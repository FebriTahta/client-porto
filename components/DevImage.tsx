import React from 'react';
import Image from 'next/image';

type imageProps = {
  src: string | null | undefined;
};

const DevImage = ({ src }: imageProps) => {
  const imageSrc = src || "/t-logo.png"; // Gambar default saat src null

  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        overflow: "hidden",
      }}
    >
      <Image
        src={imageSrc}
        alt="User avatar"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        priority
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default DevImage;
