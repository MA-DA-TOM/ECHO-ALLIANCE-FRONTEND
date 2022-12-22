import React from "react";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateInfoUser } from '../reducers/user';

import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	SafeAreaView,
	TextInput,
	ImageBackground,
} from "react-native";

const BACKEND_ADRESS = '192.168.0.19:3000';


export default function Connexion({navigation}) {

	const dispatch = useDispatch();
	// const user = useSelector((state) => state.user.value);

	const [signInEmail, setSignInEmail] = useState('');
	const [signInPassword, setSignInPassword] = useState('');

	// const handleSubmit = () => {
	// 	dispatch(updateEmail(email));
	// 	navigation.navigate('BenevoleMenu');
	//   };

	
	const handleConnection = () => {

		if (signInEmail.length === 0 || signInPassword === 0) {
			return;
		  }

		fetch(`http://${BACKEND_ADRESS}/benevole/connexion`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email: signInEmail, password: signInPassword }),
		}).then(response => response.json())
		.then(data => {

			if (data.result === true) {
				dispatch(updateInfoUser({email: signInEmail, token: data.token}));
				setSignInEmail('');
				setSignInPassword('');
				
				navigation.navigate('BenevoleMenu');

				}
			});
	};


// 	const handleLogout = () => {
// 		dispatch(logout());
// 	};


	return (
		<ImageBackground
			source={require("../assets/volunteer.jpg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.background1}>
					<SafeAreaView>
						<Text style={styles.email}>Email</Text>

						<TextInput style={styles.input} onChangeText={(value) => setSignInEmail(value)} value={signInEmail}/>
					</SafeAreaView>
				</View>

				<View style={styles.background2}>
					<SafeAreaView>
						<Text style={styles.mdp}>Mot de passe</Text>

						<TextInput style={styles.input} onChangeText={(value) => setSignInPassword(value)} value={signInPassword}/>
					</SafeAreaView>
				</View>

				<TouchableOpacity
					onPress={() => handleConnection()}
					style={styles.button}
					activeOpacity={0.8}
				>
					<Text style={styles.textButton}>Connexion</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		width: "100%",
		height: "100%",
	},
	container: {
		flex: 1,
		justifyContent: "space-evenly",
		backgroundColor: "rgba(52, 52, 52, 0.8)",
	},

	input: {
		height: 35,
		margin: 15,
		borderWidth: 1,
		width: "90%",
		backgroundColor: "#ffffff",
	},
	button: {
		alignItems: "center",
		paddingTop: 8,
		width: "80%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
		marginLeft: "10%",
		borderWidth: 1,
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,

		elevation: 25,
	},
	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	email: {
		color: "#ffffff",
		marginLeft: 5,
		marginTop: 5,
		fontWeight: "bold",
	},
	mdp: { color: "#ffffff", marginLeft: 5, marginTop: 5, fontWeight: "bold" },
});
