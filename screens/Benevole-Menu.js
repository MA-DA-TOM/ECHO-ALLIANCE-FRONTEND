import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

export default function BenevoleMenu({ navigation }) {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.header}>
				<Text style={styles.title}>Echo-Alliance</Text>
			</View>
			<View style={styles.subcontainer}>
				<View style={styles.card1}>
					<TouchableOpacity
						style={styles.buttonOpacity}
						onPress={() => navigation.navigate("BenevoleProfil")}
					>
						<Text style={styles.profiletext}>Profile</Text>
						<Image
							style={styles.profileimage}
							source={require("../assets/logo-profile.png")}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.card1}>
					<TouchableOpacity
						style={styles.buttonOpacity}
						onPress={() => navigation.navigate("BenevoleMap")}
					>
						<Text style={styles.map}>Map</Text>
						<Image
							style={styles.mapimage}
							source={require("../assets/logo-map.png")}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.card2}>
					<TouchableOpacity
						style={styles.buttonOpacity}
						onPress={() => navigation.navigate("BenevoleAvantage")}
					>
						<Text style={styles.avantages}>Mes avantages</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.card2}>
					<TouchableOpacity
						style={styles.buttonOpacity}
						onPress={() => navigation.navigate("BenevoleSearch")}
					>
						<Text style={styles.evenements}>Evenements</Text>
					</TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate("Home")}
				style={styles.button}
				activeOpacity={0.8}
			>
				<Text style={styles.textButton}>Deconnexion</Text>
			</TouchableOpacity>
			<View style={styles.footer}>
				<Text style={styles.privacy}>Privacy</Text>
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "space-around",
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		fontWeight: "600",
		color: "#0CA789",
	},
	home: {
		height: 30,
		width: 30,
		marginLeft: 35,
		marginTop: 5,
	},
	buttonOpacity: {
		alignItems: "center",
		height: "100%",
		width: "100%",
	},
	button: {
		alignItems: "center",
		paddingTop: 8,
		width: "80%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
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
	},
	subcontainer: {
		justifyContent: "center",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	card1: {
		height: 160,
		width: 160,
		backgroundColor: "#ffffff",
		margin: 5,
		alignItems: "center",
		borderWidth: 1,
	},
	card2: {
		height: 160,
		width: 160,
		backgroundColor: "#8BE38E",
		margin: 5,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
	},
	profile: { fontWeight: "bold" },
	profileimage: {
		height: 60,
		width: 60,
		marginTop: 30,
	},
	profiletext: {
		fontWeight: "bold",
	},
	map: { fontWeight: "bold" },
	mapimage: {
		height: 60,
		width: 60,
		marginTop: 30,
	},
	avantages: { color: "#ffffff", fontWeight: "bold" },
	evenements: { color: "#ffffff", fontWeight: "bold" },
	footer: { marginRight: 300 },
	privacy: { fontWeight: "bold", color: "#0CA789" },
});
