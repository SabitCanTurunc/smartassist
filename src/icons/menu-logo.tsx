import React from 'react';

type MenuLogoProps = {
  onClick(): void;
  src: string; // Logo dosyasının yolu için yeni bir prop ekliyoruz
};

export const MenuLogo = ({ onClick, src }: MenuLogoProps) => {
  return (
    <img
      onClick={onClick}
      src={src}          
      width="50"
      height="80"
      alt="Logo"         
      style={{ cursor: 'pointer' }}
    />
  );
};
