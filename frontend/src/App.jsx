import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskDashboard from '@pages/Task Dashboard';
import About from '@pages/About';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskDashboard />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}