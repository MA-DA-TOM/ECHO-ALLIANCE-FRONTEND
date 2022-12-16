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
} from "react-native";

export default function BenevoleProfil({ navigation }) {
	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.container1}>
				<Text style={styles.txt}>Date:</Text>
				<View style={styles.card1}>
					<Text style={styles.txt}>Profil</Text>
					<Image
						style={styles.profileimage}
						source={require("../assets/logo-profile.png")}
					/>
				</View>
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
				</View>
			</View>
			<View style={styles.container2}>
				<Text style={styles.txt}>Nom:</Text>
				<Text style={styles.txt}>Prenom:</Text>
				<Text style={styles.txt}>Age:</Text>
			</View>
			<View style={styles.container3}>
				<Text style={styles.txt}>ID:</Text>
				<Text style={styles.txt}>Rang:</Text>
			</View>
			<View style={styles.container4}>
				<Text style={styles.pmission}>Prochaines missions</Text>
			</View>
			<View style={styles.container5}>
				<FlatList
					data={[
						{ key: "Mission 1" },
						{ key: "Mission 2" },
						{ key: "Mission 3" },
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
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "space-around",
	},
	header: { alignItems: "flex-end", marginRight: "5%" },
	home: {
		height: 30,
		width: 30,
	},
	container1: {
		justifyContent: "space-around",
		flexDirection: "row",
		flexWrap: "wrap",
		alignItems: "center",
	},
	container2: {
		justifyContent: "space-around",
		flexDirection: "column",
		flexWrap: "wrap",
		marginLeft: "5%",
	},
	container2: {
		justifyContent: "space-around",
		flexDirection: "column",
		flexWrap: "wrap",
		marginLeft: "5%",
	},
	container3: {
		justifyContent: "space-around",
		flexDirection: "column",
		flexWrap: "wrap",
		marginLeft: "5%",
	},
	container4: {
		alignItems: "center",
	},
	container5: {
		justifyContent: "space-around",
		flexDirection: "column",
		flexWrap: "wrap",
		marginLeft: "5%",
	},
	profileimage: {
		height: 60,
		width: 60,
		marginTop: 30,
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
	txt: {
		fontWeight: "bold",
		color: "#0CA789",
		textDecorationLine: "underline",
	},
	pmission: {
		fontWeight: "bold",
		color: "#0CA789",
		fontWeight: "bold",
		textDecorationLine: "underline",
		fontSize: 25,
	},
});
