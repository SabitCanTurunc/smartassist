import Image from 'next/image';
import React from 'react';

export const PortalBanner = () => {
  return (
    <div className="w-full bg-black flex justify-center">
      <Image
        src="https://ucarecdn.com/76d1a551-c59a-493e-9ddc-64c4fcc5e032/BannerGif.gif"
        alt="LOGO"
        width={400} // Genişliği ayarlayın
        height={200} // Yüksekliği ayarlayın
        style={{
          height: 'auto', // Görüntünün oranını korur
        }}
      />
    </div>
  );
};
