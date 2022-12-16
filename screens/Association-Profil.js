import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
} from "react-native";

export default function BenevoleMission({ navigation }) {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container1}>
				<Text style={styles.nom}>Nom:</Text>
			</View>
			<View style={styles.container1}>
				<Text style={styles.adresse}>Adresse:</Text>
			</View>
			<View style={styles.container1}>
				<Text style={styles.horaires}>Horaires:</Text>
			</View>
			<View style={styles.container1}>
				<Text style={styles.site}>Site internet:</Text>
			</View>
			<View style={styles.container1}>
				<Text style={styles.numero}>Numéro de téléphone:</Text>
			</View>
			<View style={styles.container2}>
				<Image
					style={styles.logo}
					source={require("../assets/logo-map.png")}
				/>
			</View>
			<View style={styles.container1}>
				<Text style={styles.numero}>Description:</Text>
			</View>
			<View style={styles.container3}></View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "space-around",
	},

	profile: {
		height: 30,
		width: 30,
	},
	home: {
		height: 30,
		width: 30,
	},

	container1: {
		marginLeft: "5%",
	},
	container2: {
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		height: 160,
		width: 160,
		marginLeft: 120,
	},
	container3: {
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		height: 160,
		width: 380,
		marginLeft: 6,
	},

	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
	},
	card1: {
		height: 160,
		width: 160,
		backgroundColor: "#ffffff",
		margin: 5,
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 100,
	},
	association: { fontSize: 30, fontWeight: "600", color: "#0CA789" },

	nom: {
		fontWeight: "bold",
	},
	adresse: {
		fontWeight: "bold",
	},
	horaires: {
		fontWeight: "bold",
	},
	site: {
		fontWeight: "bold",
	},
	numero: { fontWeight: "bold" },
	logo: {
		height: 70,
		width: 70,
	},
});
