import { QRCodeCanvas } from 'qrcode.react';

function AdminQRPage() {
  const challenges = [1, 2, 3, 4, 5]; // IDs de retos


  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Generar QRs de Retos</h2>
      {challenges.map((id) => {
        const url = `${window.location.origin}/challenge/${id}`;
        return (
          <div key={id} style={{ margin: '2rem 0' }}>
            <h3>Reto #{id}</h3>
            <QRCodeCanvas value={url} size={160} />
            <p>{url}</p>
          </div>
        );
      })}
      {
        
      }
    </div>
  );
}

export default AdminQRPage;
