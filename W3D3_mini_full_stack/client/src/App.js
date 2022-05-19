import './App.css';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Create from './components/Create';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>JOKES!</h1>
        <Link to="">home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/create">create</Link>
        <hr />

        <Routes>
          <Route path='' element={ <Home/> } />
          <Route path='create' element={ <Create/> } />

        </Routes>




      </div>
    </BrowserRouter>
  );
}

export default App;
