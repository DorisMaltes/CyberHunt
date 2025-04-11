import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {setDoc, Timestamp, doc} from 'firebase/firestore';
import {db} from '../firebase.js'

function HomePage() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handlePlay = async () => {
    if (name.trim()) {
      localStorage.setItem('playerName', name);
      localStorage.setItem('playerScore', '0');
  
      // aqui se registra un jugador en el Firestore
      await setDoc(doc(db, 'players', name), {
        name: name,
        score: 0,
        timestamp: new Date()
      });
  
      navigate('/main');
    } else {
      alert('Por favor, ingresa tu nombre');
    }
  };
  

  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>CyberHunt 🔐</h1>
      <p>Enter your name to start</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Tu nombre"
      />
      <br />
      <button onClick={handlePlay}>Play ▶️</button>
    </div>
  );
}

export default HomePage;
