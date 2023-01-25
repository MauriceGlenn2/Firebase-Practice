import './App.css';
import { auth } from './Firebase/init'
import React from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
//onAuthStateChanged allows users to stay logged In when page is reloaded

function App() {
  const [user, setUser] = React.useState({})
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() =>{
    onAuthStateChanged(auth, (user) =>{
      setLoading(false)
      console.log(user)
        if (user) {
          setUser(user)
        }
    })
  }, []);
  //run something when the page first mounts you need to pass an empty array in use effect

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
      setUser(user)
    })
    .catch((error) => {
      console.log(error.message)
  })
  }

  function logout() {
    signOut(auth);
    setUser({});
}

  return (
    <div className="App">
<button onClick={register}>Register</button>
<button onClick={login}>Log In</button>
<button onClick={logout}>Log Out</button>
{loading ? "loading...." : user.email}
      </div>
  );

}

export default App;
