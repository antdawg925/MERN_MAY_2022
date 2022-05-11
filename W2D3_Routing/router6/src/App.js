import './App.css';
// import {BrowserRouter} from 'react-router-dom'
import Home from './components/Home';
import Error from './components/Error';
import Form from './components/Form';
import Hero from './components/Hero';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      {/* for react we will no longer be using <a> tags unless we want to go outside to another site */}
      {/* <a href="/">home</a> */}
      <Link to={"/"}>default /</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      |
      <Link to={"/home"}>home</Link>

      <Routes>
        <Route path="/home" element={
          <>
            <p>hello</p>
            <Home x={"hello"}/>
          </>
        } />
        <Route path='/form' element={<Form />}/>
        {/* <Route path='/hero/:unicornId/:whatever' element={<Hero/>}/> */}
        <Route path='/hero/:unicornId' element={<Hero/>}/>
        <Route path='error' element={<Error />} />
      </Routes>



    </div>
    // </BrowserRouter>
  );
}

export default App;
