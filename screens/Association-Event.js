import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Modal,
	ImageBackground,
} from "react-native";
import { useReducer, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from 'react-redux';
import { updateInfoUser } from '../reducers/user';
import { useSelector } from 'react-redux';

const BACKEND_ADRESS = '192.168.1.62:3000';

export default function AssociationEvent({ navigation }) {

	const events = []
	const showEvent = () => {
		fetch(`http://${BACKEND_ADRESS}/association/assoData/az`).then((response) => response.json())
			.then((data) => {
				events.push(data)
			})
	}
	showEvent()
	console.log(events)

	const myEvents = events.map((data, i) => {
		const nameEvent = data.name;
		console.log(nameEvent)
		const dateEvent = data.startDate;
		console.log(dateEvent)
		return (
			<View style={styles.container3}>
				<Text>{nameEvent} le {dateEvent}</Text>

				<TouchableOpacity
					style={styles.buttonOpacity}
				>
					<Image
						style={styles.profile}
						source={require("../assets/logo-profile.png")}
					/>
				</TouchableOpacity>
			</View>
		)
	})

	return (
		<ImageBackground
			source={require("../assets/backgrounda.jpg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.container2}>
					<View style={styles.container21}>
						<Text style={styles.txt}>Rajouter un event:</Text>
					</View>
					<View style={styles.container22}>
						<TouchableOpacity
							style={styles.buttonOpacity}
							onPress={() =>
								navigation.navigate("AssociationAddEvent")
							}
						>
							<Image
								style={styles.add}
								source={require("../assets/logo-add.png")}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.container34}>
					<View style={styles.container3}>
						<Text style={styles.txt}>Evenements en cours:</Text>
					</View>

						{myEvents}
				
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
		backgroundColor: "rgba(52, 52, 52, 0.5)",
		justifyContent: "space-around",
	},
	header: {
		marginRight: "5%",
		marginLeft: "5%",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-end",
	},
	home: {
		height: 30,
		width: 30,
	},

	container2: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
	container21: {
		marginLeft: 5,
		marginTop: 5,
		padding: 5,
	},
	container21b: {
		flexDirection: "column",
		flexWrap: "wrap",
	},
	container22: {
		margin: 5,
		padding: 5,
	},
	container211: { marginLeft: 5, padding: 5 },
	container212: { marginLeft: 5, marginTop: 5, padding: 5 },
	container22b: {
		margin: 5,
		padding: 5,
		alignItems: "center",
		borderWidth: 1,
		height: 130,
		width: 130,
	},
	container3: {
		margin: 5,
		padding: 5,
	},
	container4: {
		margin: 5,
		padding: 5,
	},
	container34: { flexDirection: "row", flexWrap: "wrap" },

	txt: {
		fontWeight: "bold",
		color: "#ffffff",
		fontWeight: "bold",
		textDecorationLine: "underline",
		fontSize: 15,
	},
	map: {
		fontWeight: "bold",
		color: "#0CA789",
		fontWeight: "bold",
		fontSize: 15,
	},

	mapimage: {
		height: 60,
		width: 60,
		marginTop: 30,
	},
	add: { height: 20, width: 20, marginLeft: 10 },
	newModal: { flex: 1, marginTop: 50 },
	newModal2: { flex: 1, alignItems: "center", marginBottom: 150 },
	profile: {
		height: 20,
		width: 20,
		marginLeft: 10,
	},
});
