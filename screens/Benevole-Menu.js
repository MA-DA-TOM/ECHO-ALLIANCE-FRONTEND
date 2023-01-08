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
import {
	faPowerOff,
	faMagnifyingGlassLocation,
	faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { deleteInfoAsso } from '../reducers/association';
import { deleteInfoEvent } from '../reducers/event';
import { deleteInfoEntreprise } from '../reducers/entreprise';
import { deleteInfoUser } from "../reducers/user";

export default function BenevoleMenu({ navigation }) {

	const dispatch = useDispatch();

	const handleDisconnect = () => {
		dispatch(deleteInfoAsso());
		dispatch(deleteInfoEvent());
		dispatch(deleteInfoEntreprise());
		dispatch(deleteInfoUser())
		navigation.navigate("Home")
	}

	return (
		<ImageBackground
			source={require("../assets/plante.jpg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.off}>
					<TouchableOpacity
						onPress={() => handleDisconnect()}
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
								navigation.navigate("BenevoleProfil")
							}
						>
							<Text style={styles.profiletext}>Profil</Text>
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
							onPress={() =>
								navigation.navigate("BenevoleAvantage")
							}
						>
							<Text style={styles.avantages}>Avantages</Text>
							<FontAwesomeIcon
								icon={faTicket}
								style={styles.ticket}
								size={80}
								activeOpacity={0.8}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.card2}>
						<TouchableOpacity
							style={styles.buttonOpacity}
							onPress={() =>
								navigation.navigate("BenevoleSearch")
							}
						>
							<Text style={styles.evenements}>Evenements</Text>
							<FontAwesomeIcon
								icon={faMagnifyingGlassLocation}
								style={styles.glass}
								size={80}
								activeOpacity={0.8}
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
		opacity: 0.95,
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
	glass: { color: "#ffffff", marginTop: 80 },
	ticket: { color: "#ffffff", marginTop: 80 },
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
		marginTop: "10%",
		height: "40%",
		width: "45%",
		backgroundColor: "#ffffff",
		alignItems: "center",
		borderWidth: 1,
	},
	card2: {
		height: "40%",
		width: "45%",
		backgroundColor: "#0CA789",
		alignItems: "center",
		borderWidth: 1,
	},
	profile: { fontWeight: "bold" },
	profileimage: {
		height: 80,
		width: 80,
		marginTop: 80,
	},
	profiletext: {
		fontWeight: "bold",
		fontSize: 20,
	},
	map: { fontWeight: "bold", fontSize: 20 },
	mapimage: {
		height: 80,
		width: 80,
		marginTop: 80,
	},
	avantages: { color: "#ffffff", fontWeight: "bold", fontSize: 20 },
	evenements: { color: "#ffffff", fontWeight: "bold", fontSize: 20 },
});
