/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	updateProfile,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const signInWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleProvider);
	};

	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		loading,
		createUser,
		updateUserProfile,
		signIn,
		logOut,
		signInWithGoogle,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
