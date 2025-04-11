import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import LeaderboardPage from './pages/LeaderPage'
import QRScannerPage from './pages/QRScannerPage';
import ChallengePage from './pages/ChallengePage';
import FeedbackPage from './pages/FeedbackPage'
import AdminQRPage from './pages/AdminQRPage';
import FinalPage from './pages/FinalPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/scanner" element={<QRScannerPage />} />
      <Route path="/challenge/:id" element={<ChallengePage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/admin/qr" element={<AdminQRPage />} />
      <Route path="/final" element={<FinalPage />} />
    </Routes>
  );
}

export default App;


