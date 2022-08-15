import './App.css';
import UserList from './Components/userList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbarr from './Components/Navbarr';
import Profile from './Components/Profile';
function App() {
  return (
    <div className="App">


      <h1>hello</h1>
      <Navbarr></Navbarr>
      <Router>  
      
        <Routes>  
        
        <Route path='/Profile' element={<Profile/>}></Route>        
        <Route path='/UserList/:id_user' element={<UserList/>}></Route>  
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
