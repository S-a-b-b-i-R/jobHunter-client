import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { useMutation } from "@tanstack/react-query";
import { getJWTToken } from "../APIs/api";

export const AuthContext = createContext();
const googleSignInProvider = new GoogleAuthProvider();
const githubSignInProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const { mutateAsync } = useMutation({
        mutationFn: getJWTToken,
    });

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleSignInProvider);
    };

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubSignInProvider);
    };

    const updateUserProfile = (fullName, url) => {
        setLoading(true);
        return updateProfile({
            displayName: fullName,
            photoURL: url,
        });
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const uid = currentUser?.uid || user?.uid;
            const loggedUser = { uid: uid };
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoading(false);
            if (currentUser) {
                try {
                    mutateAsync(loggedUser);
                } catch (error) {
                    console.log(error);
                }
            }
        });
        return () => unSubscribe();
    }, []);

    const logout = () => {
        return signOut(auth);
    };

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        githubSignIn,
        logout,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;
