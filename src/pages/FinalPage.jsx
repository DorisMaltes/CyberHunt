import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {db} from '../firebase.js'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

function FinalPage() {
  const navigate = useNavigate();
  const score = parseInt(localStorage.getItem('playerScore') || '0');
  const playerName = localStorage.getItem('playerName') || '';

  useEffect(() => {
    // Si no completó retos, o algo, podrías redirigir
    // if(...) navigate('/main');
  }, []);

    //esta funcion es para terminar la sesión por completo, elimina el local storage y el docuemnto en el firebase
    const deleteItems = async () => {
      const name = localStorage.getItem('playerName');
      await deleteDoc(doc(db, 'players', name));
      
  
  
      localStorage.removeItem("playerName");
      localStorage.removeItem("playerScore");
      localStorage.removeItem("answeredChallenges");
  
  
  
      navigate ('/');
  
    }

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Thanks for playing :), {playerName}! 🎉</h2>
      <p>CyberHunt </p>
      <p>Your final score is: <strong>{score}</strong></p>

      <button onClick={() => navigate('/leaderboard')}>
        Check out the Leaderboard
      </button>
      <br /><br />
      <button onClick={deleteItems}>
        Exit Game
      </button>
    </div>
  );
}

export default FinalPage;
