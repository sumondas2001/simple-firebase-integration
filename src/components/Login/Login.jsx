import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";



const Login = () => {
     const [user, setUser] = useState(null)
     const auth = getAuth(app);
     const googleProvider = new GoogleAuthProvider();
     const githubProvider = new GithubAuthProvider();

     const handleGoogleSignIn = () => {
          signInWithPopup(auth, googleProvider)
               .then(result => {
                    const signUser = result.user;
                    console.log(signUser);
                    setUser(signUser)
               })
               .catch(error => {
                    console.log(error.message)
               })
     };
     const handleGithubSignIn = () => {
          signInWithPopup(auth, githubProvider)
               .then(result => {
                    const user = result.user;
                    setUser(user);
                    console.log(user)
               })
               .catch(error => {
                    console.log(error)
               })
     }

     const handelLogOut = () => {
          signOut(auth)
               .then(result => {
                    setUser(null)
               })
               .catch(error => {
                    console.log(error)
               })
     }


     return (
          <div>
               {
                    user ?
                         <button onClick={handelLogOut} className="text-xl bg-green-600 border p-2 mr-10">Logout</button> :

                         <div>
                              <button onClick={handleGoogleSignIn} className="text-xl bg-green-600 border p-2 mr-10">Google Login</button>
                              <button onClick={handleGithubSignIn} className="text-xl bg-green-600 border p-2 mr-10">Github Login</button>
                         </div>
               }


               {
                    user && <div>
                         <h1>user : {user.displayName}</h1>
                         <h1>email : {user.email}</h1>
                         <img src={user.photoURL} alt="" />
                    </div>
               }

          </div>
     );
};

export default Login;