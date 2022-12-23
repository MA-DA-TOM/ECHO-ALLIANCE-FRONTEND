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

export default function EntrepriseConnection({ navigation }) {
	return (
		<ImageBackground
			source={require("../assets/fondecran.jpeg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.container1}>
					<View style={styles.background2}>
						<Text style={styles.palier}>Palier 1</Text>
						<SafeAreaView>
							<TextInput style={styles.input} />
						</SafeAreaView>
					</View>
				</View>
				<View style={styles.container1}>
					<View style={styles.background2}>
						<Text style={styles.palier}>Palier 2</Text>
						<SafeAreaView>
							<TextInput style={styles.input} />
						</SafeAreaView>
					</View>
				</View>
				<View style={styles.container1}>
					<View style={styles.background2}>
						<Text style={styles.palier}>Palier 3</Text>
						<SafeAreaView>
							<TextInput style={styles.input} />
						</SafeAreaView>
					</View>
				</View>

				<TouchableOpacity
					onPress={() => navigation.navigate("EntrepriseMenu")}
					style={styles.button}
					activeOpacity={0.8}
				>
					<Text style={styles.textButton}>Sauvegarder</Text>
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
		backgroundColor: "rgba(52, 52, 52, 0.5)",
		justifyContent: "space-around",
	},

	container1: {
		justifyContent: "space-between",
		marginLeft: "5%",
		flexWrap: "wrap",
		flexDirection: "column",
	},
	background2: {
		borderRadius: 10,
		width: "95%",
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

	palier: {
		color: "#ffffff",
		marginLeft: 5,
		marginTop: 5,
		fontWeight: "bold",
	},
});
