import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

      </Routes>
      <h1>hello</h1>
    </div>
  );
}

export default App;
