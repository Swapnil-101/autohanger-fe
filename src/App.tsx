import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Application from "./Application";
import MainApplication from './MainApplication';
import Login from './Login';

function App() {
  return (
    <main className="">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Application />} />
            <Route path="/login" element={<Login />} />
            <Route path="/app-main" element={<MainApplication />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
