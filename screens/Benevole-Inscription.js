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
			<View style={styles.container1}>
				<Text style={styles.title}>
					Welcome to <Text style={styles.echo}>Echo Alliance</Text>
				</Text>
			</View>
			<View style={styles.container2}>
				<View style={styles.background}>
					<Text style={styles.nom}>Nom</Text>
					<SafeAreaView>
						<TextInput style={styles.input} />
					</SafeAreaView>
					<Text style={styles.prenom}>Prénom</Text>
					<SafeAreaView>
						<TextInput style={styles.input} />
					</SafeAreaView>
					<Text style={styles.geolocalisation}>Géolocalisation</Text>
					<SafeAreaView>
						<TextInput style={styles.input} />
					</SafeAreaView>
					<Text style={styles.date}>Date de naissance</Text>
					<SafeAreaView>
						<TextInput style={styles.input} />
					</SafeAreaView>
					<Text style={styles.email}>Email</Text>
					<SafeAreaView>
						<TextInput style={styles.input} />
					</SafeAreaView>
					<Text style={styles.mdp}>Mot de passe</Text>
					<SafeAreaView>
						<TextInput style={styles.input} />
					</SafeAreaView>
				</View>
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
	container1: {
		alignItems: "center",
	},
	container2: {
		// flexDirection: "row",
		// flexWrap: "wrap",
		// justifyContent: "flex-start",
	},
	background: {
		backgroundColor: "#439798",
		borderRadius: 10,
	},
	title: {
		fontSize: 30,
		fontWeight: "600",
		fontWeight: "bold",
	},
	echo: {
		fontSize: 30,
		fontWeight: "600",
		color: "#0CA789",
		fontWeight: "bold",
	},
	input: {
		height: 35,
		margin: 15,
		borderWidth: 1,
		width: 305,
		backgroundColor: "#ffffff",
		padding: 5,
	},
	container2: {
		justifyContent: "space-between",

		marginLeft: "5%",
		flexWrap: "wrap",
		flexDirection: "column",
	},

	button: {
		alignItems: "center",
		paddingTop: 8,
		width: "80%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
		marginLeft: "10%",
	},
	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
	},
	nom: { color: "#ffffff", marginLeft: 5, marginTop: 5, fontWeight: "bold" },
	prenom: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
	geolocalisation: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
	date: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
	email: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
	mdp: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
});
