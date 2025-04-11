// src/pages/FeedbackPage.jsx

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function FeedbackPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isCorrect, correctAnswer } = location.state || {};

  const score = parseInt(localStorage.getItem('playerScore') || '0');

  useEffect(() => {
    if (!location.state) {
      navigate('/main');
    }
  }, [location, navigate]);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>{isCorrect ? '✅ Correct!' : '❌ Incorrect'}</h2>

      {!isCorrect && (
        <p>
          The correct answer was: <strong>{correctAnswer}</strong>
        </p>
      )}

      <p style={{ fontSize: '18px', marginTop: '2rem' }}>
        Your score: <strong>{score}</strong>
      </p>

      <button
        onClick={() => navigate('/main')}
        style={{ marginTop: '2rem', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Go back to main menu
      </button>
    </div>
  );
}

export default FeedbackPage;
