import React from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

const BlurBg = () => {
  const { blurBg } = useGlobalContext();

  return (
    <section
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: '1000000',
        display: `${blurBg ? 'block' : 'none'}`,
      }}
    ></section>
  );
};

export default BlurBg;
