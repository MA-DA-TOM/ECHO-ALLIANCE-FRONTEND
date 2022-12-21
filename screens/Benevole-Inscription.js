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
} from "react-native";

export default function BenevoleInscription({ navigation }) {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.background}>
				<SafeAreaView>
					<Text style={styles.nom}>Nom</Text>
					<TextInput style={styles.input} />

					<Text style={styles.prenom}>Prénom</Text>

					<TextInput style={styles.input} />

					<Text style={styles.email}>Email</Text>
					<TextInput style={styles.input} />
					<Text style={styles.mdp}>Mot de passe</Text>

					<TextInput style={styles.input} />
				</SafeAreaView>
			</View>

			<TouchableOpacity
				onPress={() => navigation.navigate("BenevoleMenu")}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.textButton}>Inscription</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "space-around",
	},

	background: {
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
	nom: { color: "#ffffff", marginLeft: 5, marginTop: 5, fontWeight: "bold" },
	prenom: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
	geolocalisation: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
	email: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
	mdp: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
});
