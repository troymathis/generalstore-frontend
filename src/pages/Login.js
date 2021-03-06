import { useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Login(props) {
  const [ user, setUser ] = useState({
    email: "",
    password: "",
  });

  const [errorFB, setErrorFB] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        setUser({
          email: "",
          password: "",
        });
        props.history.push("/");
      })
      .catch((error) => {
        var errorMessage = error.message;
        setErrorFB(errorMessage);
        setUser({
          email: "",
          password: "",
        });
      })
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
        value={user.email}
        onChange={handleChange}/>
      <input 
        type="password" 
        name="password" 
        placeholder='password'
        value={user.password}
        onChange={handleChange}/>
      
      <input className='Submit' type="submit" value="Login"/>
    </form>
      <Link to='/register'>Not a User? Register here</Link>
      <div className='login-error'>
        {errorFB}
      </div>
    </div>
  )
}
