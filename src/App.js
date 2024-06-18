import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/mainPage/MainPage'
import UsersPage from "./pages/userPage/UserPage";
import Menu from './components/Menu';

function App() {
  return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='/users' element={<UsersPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;