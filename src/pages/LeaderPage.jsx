import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function LeaderPage() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "players"), orderBy("score", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => doc.data());
      setPlayers(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Leaderboard</h1>
      <ol>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} — {player.score} points
          </li>
        ))}
      </ol>

      <button onClick={() => navigate('/main')}>
        🔙 go back
      </button>
    </div>
  );
}

export default LeaderPage;
