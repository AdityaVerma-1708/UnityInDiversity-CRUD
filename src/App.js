
import './App.css';
import NavBar from './components/NavBar';
import UnityInDiversity from './components/UnityInDiversity';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
  
        <Route path="/" element={<UnityInDiversity/>}>
        </Route>

        <Route path="/all" element={<AllUsers/>}>
        </Route>

        <Route path="/add" element={<AddUser/>} >
        </Route>

        <Route path='/edit/:id' element={<EditUser/>}></Route>
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
