import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function BenevoleAdvanceSearch({ navigation }) {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container1}>
				<Text style={styles.title}>Recherche avancée</Text>
			</View>
			<View style={styles.container2}>
				<Text style={styles.lieu}>Lieu:</Text>
				<Text style={styles.rayon}>Rayon:</Text>
			</View>
			<View style={styles.container3}>
				<Text style={styles.date}>Date:</Text>
			</View>
			<View style={styles.container4}>
				<Text style={styles.domaine}>Domaine:</Text>
			</View>
			<View style={styles.container5}>
				<Text style={styles.temps}>Temps d'action:</Text>
			</View>

			<TouchableOpacity
				onPress={() => navigation.navigate("TabNavigator")}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.textButton}>Recherche</Text>
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

	lieu: {
		fontWeight: "bold",
	},
	rayon: {
		fontWeight: "bold",
	},
	date: {
		fontWeight: "bold",
	},
	domaine: {
		fontWeight: "bold",
	},
	temps: {
		fontWeight: "bold",
	},
});
