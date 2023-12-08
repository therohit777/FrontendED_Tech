import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './components/js/Login';
import Dashboard from './components/js/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 