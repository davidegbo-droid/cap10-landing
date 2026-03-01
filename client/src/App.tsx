import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function TodayDashboard() {
  return (
    <main>
      <h1>Capital 10</h1>
      <p>Today Dashboard (MVP)</p>
    </main>
  );
}

function Onboarding() {
  return (
    <main>
      <h1>Capital 10</h1>
      <p>Onboarding Flow (MVP)</p>
    </main>
  );
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
