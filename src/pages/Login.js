import { useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Login() {
  const [ user, setUser ] = useState({
    email: "",
    password: "",
  });

  const [errorFB, setErrorFB] = useState(null);



  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        var loginUser = userCredential.user
        setUser({
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        var errorCode = error.code;
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
      
      <input type="submit" value="submit"/>
    </form>
      <Link to='/register'>Not a User? Register here</Link>
      <div className='error'>
        {errorFB}
      </div>
    </div>
  )
}
