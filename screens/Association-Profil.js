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
			<View style={styles.container0}>
				<View style={styles.container2}></View>
			</View>
			<View style={styles.container1}>
				<Text style={styles.txt}>Nom:</Text>

				<Text style={styles.txt}>Adresse:</Text>

				<Text style={styles.txt}>Horaires:</Text>

				<Text style={styles.txt}>Site internet:</Text>

				<Text style={styles.txt}>Numéro de téléphone:</Text>
			</View>
			<View style={styles.images}>
				<View style={styles.container2b}>
					<Image
						style={styles.logo}
						source={require("../assets/logo-map.png")}
					/>
				</View>
			</View>
			<View style={styles.container3}>
				<Text style={styles.txt}>Description:</Text>
			</View>
			<View style={styles.container4}></View>
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
	container0: {
		alignItems: "center",
		justifyContent: "center",
	},
	container1: {
		marginLeft: "5%",
	},
	container2: {
		height: 160,
		width: 160,
		backgroundColor: "#ffffff",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderRadius: 100,
	},
	container2b: {
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		height: 160,
		width: 160,
	},
	images: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
	container3: { marginLeft: "5%" },
	container4: {
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		height: 200,
		marginLeft: 5,
		marginRight: 5,
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

	txt: {
		fontWeight: "bold",
		color: "#0CA789",
	},
	logo: {
		height: 70,
		width: 70,
	},
});
