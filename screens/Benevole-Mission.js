import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function BenevoleMission({ navigation }) {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container1}>
				<Text style={styles.title}>Mission</Text>
			</View>
			<View style={styles.container2}>
				<Text style={styles.association}>Association:</Text>
			</View>
			<View style={styles.container3}>
				<Text style={styles.action}>Action:</Text>
			</View>
			<View style={styles.container4}>
				<Text style={styles.horaire}>Horaires:</Text>
			</View>
			<View style={styles.container5}>
				<Text style={styles.lieu}>Lieu:</Text>
			</View>
			<View style={styles.container6}>
				<Image
					style={styles.logo}
					source={require("../assets/logo-map.png")}
				/>
			</View>

			<TouchableOpacity
				onPress={() => navigation.navigate("TabNavigator")}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.textButton}>S'inscrire</Text>
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
	header: {
		marginRight: "5%",
		marginLeft: "5%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
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
		justifyContent: "space-between",
		marginRight: "20%",
		marginLeft: "5%",
		flexWrap: "wrap",
		flexDirection: "row",
	},
	container3: {
		marginLeft: "5%",
	},
	container4: {
		marginLeft: "5%",
	},
	container5: {
		marginLeft: "5%",
	},
	container6: {
		alignItems: "center",
	},
	cloche: {
		height: 30,
		width: 30,
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
	card1: {
		height: 160,
		width: 160,
		backgroundColor: "#ffffff",
		margin: 5,
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 100,
	},

	association: {
		fontWeight: "bold",
	},
	action: {
		fontWeight: "bold",
	},
	horaire: {
		fontWeight: "bold",
	},
	lieu: {
		fontWeight: "bold",
	},
	logo: {
		height: 70,
		width: 70,
	},
});
