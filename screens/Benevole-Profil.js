import React from "react";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	FlatList,
	View,
	TouchableOpacity,
	ImageBackground,
} from "react-native";

export default function BenevoleProfil({ navigation }) {
	return (
		<ImageBackground
			source={require("../assets/fondecran.jpeg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.container1}>
					<Text style={styles.txtdate}>Date:</Text>
					<View style={styles.card2}>
						<TouchableOpacity
							style={styles.buttonOpacity}
							onPress={() => navigation.navigate("BenevoleAlert")}
						>
							<Image
								style={styles.cloche}
								source={require("../assets/logo-cloche.png")}
							/>
						</TouchableOpacity>
						<View style={styles.textecloche}>
							<Text style={styles.txtcloche}>Un problème ?</Text>
						</View>
					</View>
				</View>

				<View style={styles.container2}>
					<View style={styles.card1}>
						<Image
							style={styles.profileimage}
							source={require("../assets/logo-profile.png")}
						/>
					</View>
				</View>
				<View style={styles.container3}>
					<Text style={styles.txt}>Nom:</Text>
					<Text style={styles.txt}>Prenom:</Text>
					<Text style={styles.txt}>Age:</Text>
					<Text></Text>
					<Text style={styles.txt}>ID:</Text>
					<Text style={styles.txt}>Rang:</Text>
				</View>
				<View style={styles.container5}>
					<Text style={styles.pmission}>Prochaines missions</Text>
				</View>
				<View style={styles.container6}>
					<FlatList
						data={[
							{ key: "Mission 1" },
							{ key: "Mission 2" },
							{ key: "Mission 3" },
							{ key: "Mission 4" },
							{ key: "Mission 5" },
							{ key: "Mission 6" },
						]}
						renderItem={({ item }) => (
							<Text style={styles.item}>
								{"\u2022" + " "}
								{item.key}
							</Text>
						)}
					/>
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
	header: { alignItems: "flex-end", marginRight: "5%" },
	home: {
		height: 30,
		width: 30,
	},
	container1: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		flexWrap: "wrap",
		marginBottom: -120,
		marginTop: -80,
		backgroundColor: "#ffffff",
		opacity: 0.7,
	},
	container2: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
		height: 200,
	},
	container3: {
		justifyContent: "space-around",
		flexDirection: "column",
		flexWrap: "wrap",
		paddingLeft: "1%",
		height: 150,
		marginBottom: -140,
		marginTop: -100,
		backgroundColor: "#ffffff",
		opacity: 0.7,
	},

	container5: {
		alignItems: "center",
		marginBottom: -140,
		backgroundColor: "#ffffff",
		opacity: 0.7,
	},
	container6: {
		alignItems: "center",
		flexWrap: "wrap",
		padding: "1%",
		backgroundColor: "#ffffff",
		height: 150,
		opacity: 0.7,
	},
	profileimage: {
		height: 60,
		width: 60,
		marginTop: 40,
	},
	cloche: {
		height: 30,
		width: 30,
		marginLeft: 20,
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
		margin: 20,
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 100,
	},
	txt: {
		fontWeight: "bold",
		color: "#0CA789",
	},
	txtcloche: {
		fontSize: 10,
		textAlign: "center",
		color: "#0CA789",
	},
	textecloche: { width: 70 },
	txtdate: {
		fontWeight: "bold",
		color: "#0CA789",
		marginBottom: 10,
	},
	pmission: {
		fontWeight: "bold",
		color: "#0CA789",
		fontWeight: "bold",
		fontSize: 25,
	},
	item: { color: "#0CA789", fontSize: 15 },
});
