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
import { faPowerOff, faMagnifyingGlassLocation, } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import { deleteInfoAsso } from '../reducers/association';
import { deleteInfoEvent } from '../reducers/event';
import { deleteInfoEntreprise } from '../reducers/entreprise';

import { useSelector } from 'react-redux';


export default function AssociationMenu({ navigation }) {

	const dispatch = useDispatch();

	const handleDisconnect = () => {
		dispatch(deleteInfoAsso());
		dispatch(deleteInfoEvent());
		dispatch(deleteInfoEntreprise());
		navigation.navigate("Home")
	}


	return (
		<ImageBackground
			source={require("../assets/backgrounda.jpg")}
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
								navigation.navigate("AssociationProfil")
							}
						>
							<Text style={styles.associationtext}>
								Association
							</Text>
							<Image
								style={styles.associationimage}
								source={require("../assets/logo-profile.png")}
							/>
						</TouchableOpacity>
					</View>

					<View style={styles.card2}>
						<TouchableOpacity
							style={styles.buttonOpacity}
							onPress={() =>
								navigation.navigate("AssociationEvent")
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
	glass: { color: "#ffffff", marginTop: 80 },
	title: {
		fontSize: 30,
		fontWeight: "600",
		color: "#ffffff",
		marginBottom: 30,
	},

	buttonOpacity: {
		alignItems: "center",
		height: "100%",
		width: "100%",
	},
	button: {
		color: "#ffffff",
	},

	subcontainer: {
		justifyContent: "center",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	card1: {
		height: 280,
		width: 380,
		backgroundColor: "#ffffff",
		margin: 5,
		alignItems: "center",
		borderWidth: 1,
	},
	card2: {
		height: 280,
		width: 185,
		backgroundColor: "#0CA789",
		margin: 5,
		borderWidth: 1,
		marginBottom: 50,
	},
	card3: {
		height: 280,
		width: 185,
		backgroundColor: "#ffffff",
		margin: 5,
		borderWidth: 1,
	},
	associationimage: {
		height: 80,
		width: 80,
		marginTop: 80,
	},
	associationtext: {
		fontWeight: "bold",
		fontSize: 20,
	},
	map: { fontWeight: "bold", fontSize: 20 },
	mapimage: {
		height: 80,
		width: 80,
		marginTop: 80,
	},
	evenements: { color: "#ffffff", fontWeight: "bold", fontSize: 20 },
});
