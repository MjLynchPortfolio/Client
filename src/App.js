// Importing Dependencies
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css';

// Importing Components
import LandingPage from './Components/Landing-Page';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
