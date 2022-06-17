import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import Nav from './components/Nav';
import Main from './components/Main';
import "./styles.scss";

function App() {
  const [ user, setUser ] = useState(null);

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return ()=> {
      unsubscribe();
    }
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user))
  }, []);

  return (
    <div className="App">
      <h1>General Store</h1>
      <Nav user={user} />
      <Main user={user} />
    </div>
  );
}

export default App;
