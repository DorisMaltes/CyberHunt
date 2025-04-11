import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QrReader from 'react-qr-reader';

function QRScannerPage() {
  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      // Si el QR contiene "/challenge/"
      if (data.includes('/challenge/')) {
        const splitted = data.split('/challenge/');
        if (splitted[1]) {
          navigate(`/challenge/${splitted[1]}`);
        }
      } 
      
      if (data.includes('/game/')){
        navigate('/game/');
      }
      
      
      else {
        alert('QR no válido para un reto o juego');
      }
      
      
    }
    
  };

  const handleError = (err) => {
    console.error('Error al escanear QR:', err);
    alert('Ocurrió un error al acceder a la cámara o leer el código');
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Escanear QR</h2>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      </div>
      <p>Result: {scanResult}</p>

      <button onClick={() => navigate('/main')}>Back to main page</button>
    </div>
  );
}

export default QRScannerPage;
