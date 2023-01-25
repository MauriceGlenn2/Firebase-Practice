import './App.css';
import { auth } from './Firebase/init'
import { React } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({})

  function register() {
    console.log('Register')
    createUserWithEmailAndPassword(auth, "email@email.com", "password")
    .then((user) => {
      console.log(user)
    })
    .catch((error) => {
      console.log(error)
    })
  
    
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@email.com", "password")
    .then(({ user }) => {
      console.log(user)
    })
    .catch((error) => {
     const error = seterrormessage("")
      console.log(error)
  })
  }

  function logout() {
    signOut(auth)
}

  return (
    <div className="App">
<button onClick={register}>Register</button>
<button onClick={login}>Log In</button>
<button onClick={logout}>Log Out</button>
      </div>
  );

}

export default App;
