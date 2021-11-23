import { useState, useEffect } from 'react'; 

import SignUp from './components/SignUp';
import firebase from './service/firebase';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import People from './components/pages/People';
import MyPeople from './components/pages/MyPeople';
import './App.css';
// const { getDatabase } = require('firebase-admin/database');
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const ref = firebase.firestore().collection('users');
// const realref = getDatabase().ref();

function App() {

  const [user, setUser] = useState(null);
  //to check if user is logged in or not
  useEffect(() => { 
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, []);

  // console.log(user);



  return (
    <>
<Router>
  
        {
          user ? <><Navbar user={user}/> 
          <Routes>
          <Route path="/" element={<People />} />
          <Route path="/mypeople" element={<MyPeople />} />
        </Routes></>  : <SignUp />
        }
       
</Router>
    </>
  );
}

export { ref };
export default App;
