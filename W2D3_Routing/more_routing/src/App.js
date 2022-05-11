import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Result from './components/Result';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <h2>Routing</h2>
      <hr />
      <Link to="/">home 🏠</Link>
      |
      <Link to="/form">form 📝</Link>
      |
      <Link to="/result">results 📊</Link>

      <hr />
      {/* theater stage where Components will load based on their route */}
      <Routes>

        <Route exact path='/form' element={<Form />} />

        <Route path='/result' element={<Result />} />


        <Route path='/:name/:num' element={<Hero />} />
      </Routes>


    </div>
  );
}

export default App;
