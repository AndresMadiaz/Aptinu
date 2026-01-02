
import React from 'react';

interface GlowEffectProps {
  position: 'top-right' | 'bottom-left' | 'center';
}

const GlowEffect: React.FC<GlowEffectProps> = ({ position }) => {
  const positions = {
    'top-right': 'top-[-10%] right-[-10%]',
    'bottom-left': 'bottom-[-10%] left-[-10%]',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  return (
    <div 
      className={`absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-[100px] z-0 ${positions[position]}`}
      style={{
        background: 'radial-gradient(circle, rgba(255, 107, 157, 0.4) 0%, rgba(255, 160, 122, 0.2) 50%, transparent 100%)'
      }}
    />
  );
};

export default GlowEffect;
