import Image from 'next/image';
import React from 'react';

export const PortalBanner = () => {
  return (
    <div className="w-full bg-black flex justify-center">
      <Image
        src="images/logo.png"
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
