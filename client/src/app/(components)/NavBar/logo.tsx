import React from 'react';
import Image from 'next/image';

type Props = {};

const LogoBar = (props: Props) => {
  return (
    <div className="logo-container">
      <Image priority src="/logo.svg" alt="Logo" width="40" height="40"/>
    </div>
  );
};

export default LogoBar;
