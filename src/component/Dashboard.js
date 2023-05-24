import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Dashboard() {
    const { theme, toggleTheme } =useContext(ThemeContext);

    const dashboardStyle = {
        backgroundColor: theme === 'dark' ? '#333' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        padding: '2rem',
        height: '100vh',
      };

  return (
    <div style={dashboardStyle}>
    <h1>Dashboard</h1>
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
    </button>
  </div>
  )
}

export default Dashboard