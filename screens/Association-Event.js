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
} from "react-native";
import { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function AssociationEvent({ navigation }) {
	const dataToBecomeDynamic = [
		{ key: "Event 1 - Nombre d'inscrits - Annuler" },
	];

	const [modalCurrentEvent, setModalCurrentEvent] = useState(false);

	const handleModalCurrentEvent = () => {
		setModalCurrentEvent(!modalCurrentEvent);
	};

	return (
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
			<View style={styles.container3}>
				<Text style={styles.txt}>Evenements en cours:</Text>

				<FlatList
					data={dataToBecomeDynamic}
					renderItem={({ item }) => (
						<View style={styles.modalContainer}>
							<Text style={styles.item}>
								{"\u2022" + " "}
								{item.key}
							</Text>
							<FontAwesome
								name="arrow-right"
								size={25}
								color="#0CA789"
								onPress={() => handleModalCurrentEvent()}
							/>
						</View>
					)}
				/>
			</View>

			<Modal visible={modalCurrentEvent} animationType="fade">
				<View style={styles.newModal}>
					<FontAwesome
						name="arrow-left"
						size={25}
						color="#0CA789"
						onPress={() => handleModalCurrentEvent()}
					/>
				</View>
				<View style={styles.newModal2}>
					<View style={styles.container2}>
						<View style={styles.container21b}>
							<View style={styles.container211}>
								<Text style={styles.txt}>Evenement:</Text>
							</View>
							<View style={styles.container212}>
								<FlatList
									data={[
										{ key: "Lieu" },
										{ key: "Date" },
										{ key: "Heure" },
										{ key: "Description" },
									]}
									renderItem={({ item }) => (
										<Text style={styles.item}>
											{"\u2022" + " "}
											{item.key}
										</Text>
									)}
								/>
							</View>
						</View>

						<View style={styles.container22b}>
							<View style={styles.container221}>
								<Text style={styles.map}>Map</Text>
							</View>
							<View style={styles.container222}>
								<Image
									style={styles.mapimage}
									source={require("../assets/logo-map.png")}
								/>
							</View>
						</View>
					</View>
				</View>
			</Modal>
			<View style={styles.container4}>
				<TouchableOpacity
					style={styles.buttonOpacity}
					onPress={() =>
						navigation.navigate("AssociationEventSubscriptions")
					}
				>
					<Image
						style={styles.profile}
						source={require("../assets/logo-profile.png")}
					/>
				</TouchableOpacity>
			</View>
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
		backgroundColor: "#ffffff",
		margin: 5,
		padding: 5,
	},
	txt: {
		fontWeight: "bold",
		color: "#0CA789",
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
	profile: { height: 20, width: 20, marginLeft: 10 },
});
