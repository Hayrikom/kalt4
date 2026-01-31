'use client';

import { useState } from 'react';
import { useSignMessage } from 'wagmi';
import WalletWrapper from '../components/WalletWrapper'; 

export default function Page() {
  const [bgIndex, setBgIndex] = useState(0);
  const { signMessage } = useSignMessage();

  const colors = ['#000000', '#0052FF', '#7C3AED', '#059669', '#D891B2'];

  const handleBuildOnBase = () => {
    setBgIndex((prev) => (prev + 1) % colors.length);
    signMessage({ message: 'Hayriko App üzerinden ilk onchain imzam!' });
  };

  return (
    <div style={{ backgroundColor: colors[bgIndex], height: '100vh', width: '100vw', transition: 'background-color 0.5s ease', color: 'white' }}>
      
      {/* SAĞ ÜSTTEKİ CÜZDAN BUTONU */}
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <WalletWrapper />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '1rem', textAlign: 'center' }}>
          Hayriko's Base App
        </h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.2rem', opacity: 0.8 }}>
          Blokzincirindeki yeni izim.
        </p>
        
        <button 
          onClick={handleBuildOnBase} 
          style={{ 
            padding: '1.2rem 2.5rem', 
            backgroundColor: 'white', 
            color: '#0052FF', 
            border: 'none', 
            borderRadius: '12px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
        >
          Rengi Değiştir ve İmzala
        </button>
      </div>
    </div>
  );
}