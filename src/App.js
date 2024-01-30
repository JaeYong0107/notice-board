import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Pages/MainPage';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
