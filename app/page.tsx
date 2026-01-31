'use client';

import { useState } from 'react';
import { useSignMessage } from 'wagmi';
import WalletWrapper from '../components/WalletWrapper'; // Yeni oluşturduğumuz yer

export default function Page() {
  const [bgIndex, setBgIndex] = useState(0);
  const { signMessage } = useSignMessage();

  const colors = ['#000000', '#0052FF', '#7C3AED', '#059669', '#0891B2'];

  const handleBuildOnBase = () => {
    setBgIndex((prev) => (prev + 1) % colors.length);
    signMessage({ message: 'First signature on my Base Mini App!' });
  };

  return (
    <div style={{ backgroundColor: colors[bgIndex], height: '100vh', width: '100vw', transition: 'background-color 0.5s ease', color: 'white', fontFamily: 'sans-serif', position: 'relative' }}>
      
      {/* SAĞ ÜSTTEKİ CÜZDAN BUTONU */}
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <WalletWrapper />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '2rem' }}>Kalt4 Mini App</h1>
        <button onClick={handleBuildOnBase} style={{ padding: '1.5rem 3rem', backgroundColor: 'white', color: '#0052FF', border: 'none', borderRadius: '9999px', fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }}>
          Build on Base
        </button>
      </div>
    </div>
  );
}