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
      width="30"
      height="30"
      alt="Logo"         
      style={{ cursor: 'pointer' }}
    />
  );
};
