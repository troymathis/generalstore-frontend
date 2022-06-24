import { useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';

//<<<<<<< login-response
//=======
const URL = "https://project3-be.herokuapp.com/users/"
//>>>>>>> main

const createBackendUser = async ({uid, email}) => {
  console.log(uid, email)
  const newBackendUser = { email: email, UID: uid, role:"customer" }
  await fetch(URL, { 
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify(newBackendUser),
  });
}

const Register = () => {
  const [ user, setUser ] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        userCredential.user.updateProfile({
          displayName: user.firstName + ' ' + user.lastName,
        })
        console.log(userCredential);
        createBackendUser(userCredential.user);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      })

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
        type="password" 
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
      <input type="submit" value="Register"/>
    </form>
    <Link to="/login">Already a user? Login here</Link>
    </div>
  )
}

export default Register;