import {useState} from 'react';

import { Routes, Route } from 'react-router-dom';

//import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPages';
//import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';

import { getUser } from './utilities/users-service';

import './App.css';

import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
     { user ? 
      <>
      
    <div>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
       
      
       <Route path='/all' element={<AllUsers/>}></Route>
       <Route path='/add' element={<AddUser/>}></Route>
       
       <Route path='/edit/:id' element={<EditUser/>}></Route>
      </Routes>
      </div>
      </>
     : 
      <AuthPage setUser={setUser}/>
      }
    </main>
  );
}

export default App;