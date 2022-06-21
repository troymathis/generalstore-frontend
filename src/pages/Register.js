import { useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';

export default function Register() {
  const [ user, setUser ] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    setUser({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
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
      <input 
        type="text" 
        name="firstName" 
        placeholder='First Name'
        onChange={handleChange}/>
      <input 
        type="text" 
        name="lastName" 
        placeholder='Last Name'
        onChange={handleChange}/>
      <input 
        type="url" 
        name="image" 
        placeholder='profile image url'
        onChange={handleChange}/>
      <input type="submit" value="submit"/>
    </form>
    </div>
  )
}
