import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // Create User or Sign up / Registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // SignIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google LogIn
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // GitHub Login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // LogOut
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.emaill;
      const loggedUser = { email: userEmail };

      console.log(currentUser, "this is currentUser");

      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post(
            "https://library-management-server-ebon.vercel.app/jwt",
            loggedUser,
            {
              withCredential: true,
            }
          )
          .then((res) => {
            // document.cookie(res.data.token)
            // cookies.set();
            Cookies.set("tooken", res.data.token);
            console.log("token Response", res.data);
          });
      } else {
        axios
          .post(
            "https://library-management-server-ebon.vercel.app/logout",
            loggedUser,
            {
              withCredential: true,
            }
          )
          .then((res) => console.log(res.data));
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logout,
    googleLogin,
    githubLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
