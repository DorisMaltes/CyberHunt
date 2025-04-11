import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import challenges from '../data/challenges';

// Importar Firebase
import { db } from '../firebase.js';
import { doc, updateDoc } from 'firebase/firestore';

function ChallengePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const challenge = challenges[id];

  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const answeredChallenges = JSON.parse(localStorage.getItem('answeredChallenges') || '[]');

    // Si challenge existe y ya está en answeredChallenges, marcamos answered y regresamos
    if (challenge && answeredChallenges.includes(id)) {
      setAnswered(true);
      setTimeout(() => {
        navigate('/main');
      }, 2000);
    }

    setLoading(false);
  }, [id, navigate, challenge]);

  // Maneja el envío de respuesta
  const handleSubmit = async () => {
    if (!selected) return;  // no hace nada si no eligió respuesta

    // Verificamos si es correcta
    const isCorrect = selected === challenge.correctAnswer;

    // Obtenemos score local
    let score = parseInt(localStorage.getItem('playerScore') || '0');

    if (isCorrect) {
      // 1. Sumar 10 puntos local
      score += 10;
      localStorage.setItem('playerScore', score.toString());

      // 2. Sumar 10 puntos en Firebase
      const playerName = localStorage.getItem('playerName') || '';
      if (playerName) {
        await updateDoc(doc(db, 'players', playerName), {
          score: score
        });
      }
    }

    if(!isCorrect){
      //restar si no es correcta 10 puntos en local
      score -= 10;
      localStorage.setItem('playerScore', score.toString());

      //restar 10 puntos en Firebase si es incorrecta: 
      const playerName = localStorage.getItem('playerName')|| '';
      if(playerName){
        await updateDoc(doc(db, 'players', playerName), {
          score: score
        });
      }

    }

    // Marcamos el reto como respondido
    const answeredChallenges = JSON.parse(localStorage.getItem('answeredChallenges') || '[]');
    if (!answeredChallenges.includes(id)) {
      answeredChallenges.push(id);
      localStorage.setItem('answeredChallenges', JSON.stringify(answeredChallenges));
    }

    // Navegamos a la pantalla de feedback
    navigate('/feedback', {
      state: {
        isCorrect,
        correctAnswer: challenge.correctAnswer,
      },
    });
  };

  if (!challenge) return <p>Reto no encontrado</p>;
  if (loading) return <p>Cargando...</p>;

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Reto #{id}</h2>
      <p>{challenge.question}</p>

      {challenge.options.map((option) => (
        <div key={option} style={{ margin: '1rem' }}>
          <label>
            <input
              type="radio"
              name="option"
              value={option}
              onChange={() => setSelected(option)}
              checked={selected === option}
              disabled={answered}
            />
            {option}
          </label>
        </div>
      ))}

      {!answered && (
        <button
          onClick={handleSubmit}
          style={{ marginTop: '1rem', padding: '10px 20px', cursor: 'pointer' }}
        >
          Submit
        </button>
      )}
    </div>
  );
}

export default ChallengePage;
