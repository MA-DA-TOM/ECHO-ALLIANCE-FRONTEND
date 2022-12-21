import React from "react";
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

export default function AssociationConnection({ navigation }) {
	return (
		<ImageBackground
			source={require("../assets/associationconnection.jpeg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.background1}>
					<Text style={styles.email}>Email</Text>
					<SafeAreaView>
						<TextInput style={styles.input} />
					</SafeAreaView>
				</View>

				<View style={styles.background2}>
					<Text style={styles.mdp}>Mot de passe</Text>
					<SafeAreaView>
						<TextInput style={styles.input} />
					</SafeAreaView>
				</View>

				<TouchableOpacity
					onPress={() => navigation.navigate("AssociationMenu")}
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
		backgroundColor: "rgba(52, 52, 52, 0.8)",
		justifyContent: "space-evenly",
	},

	background1: {
		backgroundColor: "#439798",
		borderRadius: 10,
		margin: "3%",
		marginTop: 100,
	},
	background2: {
		backgroundColor: "#439798",
		borderRadius: 10,
		margin: "3%",
	},

	input: {
		height: 35,
		margin: 15,
		borderWidth: 1,
		width: "90%",
		backgroundColor: "#ffffff",
		padding: 5,
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
