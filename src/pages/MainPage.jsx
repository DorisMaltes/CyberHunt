// src/pages/MainPage.jsx
import {useNavigate, useNavigation } from 'react-router-dom';
import {useEffect, useState} from 'react';





function MainPage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);

  



  useEffect(() => {
    const storedName = localStorage.getItem('playerName');
    const storedScore = parseInt(localStorage.getItem('playerScore') || '0');
    setName(storedName || '');
    setScore(storedScore);
  },[]);
  


  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Título */}
      <h2>Welcome, {name}! 🎮</h2>

      {/* Puntos */}
      <div style={{ fontSize: '24px', margin: '2rem 0' }}>
        <strong>Score:</strong><br />
        <span style={{ fontSize: '48px', color: '#2d8bff' }}>{score}</span>
      </div>

      {/* Botones */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <button
          onClick={() => navigate('/leaderboard')}
          style={{
            fontSize: '18px',
            padding: '10px 20px',
            borderRadius: '8px',
            background: '#333',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          ☰ Leaderboard
        </button>

        <button
          onClick={() => navigate('/scanner')}
          style={{
            fontSize: '18px',
            padding: '10px 20px',
            borderRadius: '8px',
            background: '#2d8bff',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          📷 Scan QR
        </button>

        <button
          onClick={() => navigate('/final')}
          style={{
            fontSize: '18px',
            padding: '10px 20px',
            borderRadius: '8px',
            background: '#FF5768',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          End Challenge
        </button>
      </div>
    </div>
  );
  }


  
  export default MainPage;
  