import './App.css';
import Dashboard from './component/Dashboard';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
    <Dashboard/>
    </ThemeProvider>
  );
}

export default App;
