import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Send from './pages/Send';
import Receive from './pages/Receive';
import CreateLink from './pages/CreateLink';
import Confirm from './pages/Confirm';
import History from './pages/History';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/send" element={<Send />} />
      <Route path="/receive" element={<Receive />} />
      <Route path="/create-link" element={<CreateLink />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/history" element={<History />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
