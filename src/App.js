import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import Nav from './components/Nav';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import "./styles.scss";

function App() {
  const [ user, setUser ] = useState(null);
  const [ role, setRole ] = useState(null);

  const URL = "https://project3-be.herokuapp.com/users/"

  const getRole = async (uid) => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    const currentUser = data.find(u => u.UID === uid )
    console.log(currentUser)
    setRole(currentUser.role)
    console.log(role)
  };

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return ()=> {
      unsubscribe();
    }
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged(user => {      
      setUser(user)
      console.log(user.uid)
      getRole(user.uid)
    }) 
  }, []);

  return (
    <div className="App">
      <h1 id="header">General Store</h1>
      <Nav user={user} />
      <Main user={user} role={role} />
    </div>
  );
}

export default App;
