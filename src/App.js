import './App.css';
import './assets/css/index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>

  );
}

export default App;
