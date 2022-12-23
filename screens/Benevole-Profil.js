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
	ScrollView,
} from "react-native";

export default function BenevoleProfil({ navigation }) {
	const now = new Date();

	const annee = now.getFullYear();
	const mois = ("0" + now.getMonth() + 1).slice(-2);
	const jour = ("0" + now.getDate()).slice(-2);
	return (
		<ImageBackground
			source={require("../assets/fondecran.jpeg")}
			style={styles.background}
		>
			<ScrollView>
				<KeyboardAvoidingView
					style={styles.container}
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					<View style={styles.container1}>
						<Text style={styles.txtdate}>{jour}/{mois}/{annee}</Text>
						<View style={styles.card2}>
							<TouchableOpacity
								style={styles.buttonOpacity}
								onPress={() =>
									navigation.navigate("BenevoleAlert")
								}
							>
								<Image
									style={styles.cloche}
									source={require("../assets/logo-cloche.png")}
								/>
							</TouchableOpacity>
							<View style={styles.textecloche}>
								<Text style={styles.txtcloche}>
									Un problème ?
								</Text>
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
						<View style={styles.fake}>
							<Text style={styles.txt}>Nom:</Text>
							<Text style={styles.fakeText}>	Arthuys</Text>
						</View>
						<View style={styles.fake}>
							<Text style={styles.txt}>Prenom: </Text>
							<Text style={styles.fakeText}>	Ruben</Text>
						</View>
						<View style={styles.fake}>
							<Text style={styles.txt}>Rang: </Text>
							<Text style={styles.fakeText}>	0/3</Text>
						</View>

						<View style={styles.fake}>
							<Text style={styles.txt}>Nombre d'heure avant le prochain palier: </Text>
							<Text style={styles.fakeText}>	5</Text>
						</View>
					</View>
					<View style={styles.container5}>
						<Text style={styles.pmission}>Prochaines missions</Text>
					</View>
					<View style={styles.container6}>
						{/* <FlatList
							data={[
								{ key: "Ville de Bordeaux : Rue propre" },
								{ key: "A S Kung Fu Bordeaux Bacalan: Sensibiliser les enfants aux arts martiaux" },
								// { key: "Mission 3: " },
								// { key: "Mission 4" },
								// { key: "Mission 5" },
							]}
							renderItem={({ item }) => (
								<Text style={styles.item}>
									{"\u2022" + " "}
									{item.key}
								</Text>
							)}
						/> */}
					</View>
				</KeyboardAvoidingView>
			</ScrollView>
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
		justifyContent: "flex-start",
		backgroundColor: "rgba(52, 52, 52, 0.5)",
	},
	header: { 
		alignItems: "flex-end", 
		marginRight: "5%" 
	},
	home: {
		height: 30,
		width: 30,
	},
	container1: {
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		flexWrap: "wrap",
		paddingLeft: "1%",
	},
	container2: {
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "center",
		height: 200,
		marginBottom: "20%",
	},
	container3: {
		justifyContent: "space-around",
		flexDirection: "column",
		flexWrap: "wrap",
		paddingLeft: "1%",
		height: 200,
		borderWidth: 1,
		borderColor: "#ffffff",
		backgroundColor: '#ffffff',
		opacity: 0.6,
		marginBottom: "10%",
	},

	container5: {
		alignItems: "center",
	},
	container6: {
		alignItems: "center",
		flexWrap: "wrap",

		height: 150,
		marginTop: "10%",
		paddingLeft: "1%",
	},
	profileimage: {
		height: 60,
		width: 60,
		marginTop: "30%",
	},
	cloche: {
		height: 30,
		width: 30,
		marginLeft: 20,
	},

	card1: {
		height: 160,
		width: 160,
		backgroundColor: "#ffffff",
		margin: 20,
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 100,
		marginTop: "20%",
	},
	txt: {
		fontWeight: "bold",
		color: "#0CA789",
		textDecorationLine: "underline",
	},
	txtcloche: {
		fontSize: 10,
		textAlign: "center",
		color: "#ffffff",
	},
	textecloche: { 
		width: 70 
	},
	txtdate: {
		fontWeight: "bold",
		color: "#ffffff",
		marginBottom: 10,
		textDecorationLine: "underline",
	},
	pmission: {
		fontWeight: "bold",
		color: "#ffffff",
		fontWeight: "bold",
		fontSize: 25,
		textDecorationLine: "underline",
	},
	item: { 
		color: "#ffffff", 
		fontSize: 15 
	},
	fake: {
		flexDirection: 'row'
	},
	fakeText: {
		fontWeight: 'bold',
	}
});
