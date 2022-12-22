import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ImageBackground,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPowerOff, faTags } from "@fortawesome/free-solid-svg-icons";

export default function EntreprisenMenu({ navigation }) {
	return (
		<ImageBackground
			source={require("../assets/backgrounde.jpg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.off}>
					<TouchableOpacity
						onPress={() => navigation.navigate("Home")}
					>
						<FontAwesomeIcon
							icon={faPowerOff}
							style={styles.button}
							activeOpacity={0.8}
							size={30}
						/>
					</TouchableOpacity>
				</View>
				<View style={styles.header}>
					<Text style={styles.title}>Echo-Alliance</Text>
				</View>
				<View style={styles.subcontainer}>
					<View style={styles.card1}>
						<TouchableOpacity
							style={styles.buttonOpacity}
							onPress={() =>
								navigation.navigate("EntrepriseProfil")
							}
						>
							<Text style={styles.entreprisetext}>
								Entreprise
							</Text>
							<Image
								style={styles.entrepriseimage}
								source={require("../assets/logo-profile.png")}
							/>
						</TouchableOpacity>
					</View>

					<View style={styles.card2}>
						<TouchableOpacity
							style={styles.buttonOpacity}
							onPress={() =>
								navigation.navigate("EntreprisePaliers")
							}
						>
							<Text style={styles.offres}>Offres</Text>
							<FontAwesomeIcon
								icon={faTags}
								style={styles.shop}
								size={80}
								activeOpacity={0.8}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.card3}>
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
				</View>
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
		backgroundColor: "#ffffff",
		justifyContent: "space-around",
		backgroundColor: "rgba(52, 52, 52, 0.8)",
	},
	header: { alignItems: "center" },
	off: {
		alignItems: "flex-end",
	},
	title: {
		fontSize: 30,
		fontWeight: "600",
		color: "#ffffff",
	},

	buttonOpacity: {
		alignItems: "center",
		height: "100%",
		width: "100%",
	},
	button: {
		color: "#ffffff",
	},
	shop: { color: "#ffffff", marginTop: 80 },
	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},
	subcontainer: {
		justifyContent: "center",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	card1: {
		height: "40%",
		width: "92%",
		backgroundColor: "#ffffff",
		margin: 5,
		alignItems: "center",
		borderWidth: 1,
		marginTop: "10%",
	},
	card2: {
		height: "40%",
		width: "45%",
		backgroundColor: "#0CA789",
		margin: 5,
		borderWidth: 1,
	},
	card3: {
		height: "40%",
		width: "45%",
		backgroundColor: "#ffffff",
		margin: 5,
		borderWidth: 1,
	},
	entrepriseimage: {
		height: 80,
		width: 80,
		marginTop: 80,
	},
	entreprisetext: {
		fontWeight: "bold",
	},
	map: { fontWeight: "bold", fontSize: 20 },
	mapimage: {
		height: 80,
		width: 80,
		marginTop: 80,
	},
	entreprisetext: {
		fontWeight: "bold",
		fontSize: 20,
	},
	offres: { color: "#ffffff", fontWeight: "bold", fontSize: 20 },
});
