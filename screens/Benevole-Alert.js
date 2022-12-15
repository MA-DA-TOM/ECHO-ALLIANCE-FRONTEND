import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function BenevoleAlert({ navigation }) {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container1}>
				<Text style={styles.title}>Problème</Text>
			</View>
			<View style={styles.container2}>
				<Text style={styles.temoignage}>Témoignage:</Text>
			</View>
			<View style={styles.container3}>
				<Text style={styles.txt}></Text>
			</View>
			<View style={styles.container4}>
				<Image
					style={styles.photo}
					source={require("../assets/logo-photo.png")}
				/>
			</View>
			<View style={styles.container5}>
				<Image
					style={styles.paysage}
					source={require("../assets/logo-paysage.png")}
				/>
				<Image
					style={styles.paysage}
					source={require("../assets/logo-paysage.png")}
				/>
				<Image
					style={styles.paysage}
					source={require("../assets/logo-paysage.png")}
				/>
				<Image
					style={styles.paysage}
					source={require("../assets/logo-paysage.png")}
				/>
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate("BenevoleProfil")}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.textButton}>Envoyer</Text>
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
	cross: {
		height: 30,
		width: 30,
	},
	photo: {
		height: 70,
		width: 70,
	},
	paysage: { height: 50, width: 50 },
	container1: {
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "600",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
	},
	container2: {
		marginLeft: "5%",
	},
	container3: {
		height: 100,
		backgroundColor: "#ffffff",
		margin: 5,
		padding: 5,
		borderWidth: 2,
	},
	container4: {
		backgroundColor: "#ffffff",
		borderColor: "#8BE38E",
		borderWidth: 3,
		height: 100,
		width: 100,
		borderRadius: 100,
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 135,
	},
	container5: {
		marginRight: "5%",
		marginLeft: "5%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-around",
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

	temoignage: {
		fontWeight: "bold",
		fontSize: 20,
	},
});
