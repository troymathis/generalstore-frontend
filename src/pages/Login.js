import { useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Login() {
  const [ user, setUser ] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    setUser({
        email: "",
        password: "",
    });
  }

  const handleChange = (event) => {
    setUser({...user,[event.target.name]:event.target.value});
};

  return (
    <div>

    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="email" 
        placeholder='example@email.com'
        onChange={handleChange}/>
      <input 
        type="text" 
        name="password" 
        placeholder='password'
        onChange={handleChange}/>
      
      <input type="submit" value="submit"/>
    </form>
    Not a User? Register <Link to='/register'>here</Link>
    </div>
  )
}