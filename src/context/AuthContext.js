import { useContext, createContext, useState, useEffect } from "react";
import {
    GoogleAuthProvider,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {auth } from '../Firebase'

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
 const [user, setUser] = useState({});
    const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
 };
 const logOut = ( ) => {
    signOut(auth)
 }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        console.log('User', currentUser)
    })
  
    return () => {
        unsubscribe();
    }
  }, []);
  
    
    return (
        <AuthContext.Provider  value={{googleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(AuthContext)
};