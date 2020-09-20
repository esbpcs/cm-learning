<template lang="pug">
	div(id="firebase-container")
</template>
<script>
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app'

// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/firebase-storage'

// Signs-in using Google Account
function signIn() {
	// Sign into Firebase using popup auth & Google as the identity provider.
	const provider = new firebase.auth.GoogleAuthProvider()
	firebase.auth().signInWithPopup(provider)
}

// Signs-out of Friendly Chat.
function signOut() {
	// Sign out of Firebase.
	firebase.auth().signOut()
}

// Initiate firebase auth.
function initFirebaseAuth() {
	// Listen to auth state changes.
	firebase.auth().onAuthStateChanged(authStateObserver)
}

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
	return (
		firebase.auth().currentUser.photoURL ||
		'/assets/placeholders/pictures/profile_placeholder.png'
	)
}

// Returns the signed-in user's display name.
function getUserName() {
	return firebase.auth().currentUser.displayName
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
	return !!firebase.auth().currentUser
}
</script>
