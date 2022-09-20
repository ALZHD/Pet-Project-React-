import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Counter from './components/Counter/Counter';
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/Modal" element={<Modal />} />
      </Routes>
    </div>
  );
}

export default App;
