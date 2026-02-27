import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function TodayDashboard() {
  return <main>Today Dashboard (MVP)</main>;
}

function Onboarding() {
  return <main>Onboarding Flow (MVP)</main>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/today" replace />} />
        <Route path="/today" element={<TodayDashboard />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
}
