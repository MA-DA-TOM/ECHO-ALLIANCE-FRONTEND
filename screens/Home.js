import { useState } from "react";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Modal,
	ImageBackground,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Home({ navigation }) {
	const [modalBénévole, setModalBénévole] = useState(false);
	const [modalAssociation, setModalAssociation] = useState(false);
	const [modalEntreprise, setModalEntreprise] = useState(false);

	// activé/désactivé Modal
	const handleModalBénévol = () => {
		setModalBénévole(!modalBénévole);
	};

	const handleModalAssociation = () => {
		setModalAssociation(!modalAssociation);
	};

	const handleModalEntreprise = () => {
		setModalEntreprise(!modalEntreprise);
	};

	return (
		<ImageBackground
			source={require("../assets/noplanetb.jpg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<View style={styles.subcontainer}>
					<Text style={styles.title}>
						Welcome to{" "}
						<Text style={styles.echo}>Echo Alliance</Text>
					</Text>
				</View>
				<Modal visible={modalBénévole} animationType="fade" transparent>
					<View style={styles.modalContainer}>
						<FontAwesome
							name="rotate-right"
							size={25}
							color="#ffffff"
							onPress={() => handleModalBénévol()}
						/>
						<TouchableOpacity
							style={styles.crossContainer}
							onPress={() => handleModalBénévol()}
						>
							<Image
								style={styles.cross}
								source={require("../assets/logo-cross.png")}
							/>
						</TouchableOpacity>
						<Text style={styles.title2}>
							<Text style={styles.benevole}>Bénévoles</Text>
						</Text>
						<View style={styles.texte}>
							<Text style={styles.txt}>
								Le bénévole donne de son temps en accomplissant
								les missions proposées par le pôle associations.
								Au delà d'un certain niveau d'engagement, son
								don de temps est valorisé par les entreprises
								partenaires via l'octroi de réductions et de
								cadeaux. Son engagement lui permet également de
								développer son réseau, de faire des rencontres
								et de vivre de nouvelles expériences.
							</Text>
						</View>
						<View style={styles.boutons3}>
							<TouchableOpacity style={styles.buttonC}>
								<Text style={styles.textButton}>Charte</Text>
							</TouchableOpacity>
							<View style={styles.divboutons}>
								<TouchableOpacity
									style={styles.ICbutton}
									onPress={() =>
										navigation.navigate(
											"BenevoleInscription"
										) + handleModalBénévol()
									}
								>
									<Text style={styles.textButton}>
										Inscription
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.ICbutton}
									onPress={() =>
										navigation.navigate(
											"BenevoleConnection"
										) + handleModalBénévol()
									}
								>
									<Text style={styles.textButton}>
										Connexion
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>

				<Modal
					visible={modalAssociation}
					animationType="fade"
					transparent
				>
					<View style={styles.modalContainer}>
						<FontAwesome
							name="rotate-right"
							size={25}
							color="#ffffff"
							onPress={() => handleModalAssociation()}
						/>
						<TouchableOpacity
							style={styles.crossContainer}
							onPress={() => handleModalAssociation()}
						>
							<Image
								style={styles.cross}
								source={require("../assets/logo-cross.png")}
							/>
						</TouchableOpacity>
						<Text style={styles.title2}>
							<Text style={styles.benevole}>Associations</Text>
						</Text>
						<View style={styles.texte}>
							<Text style={styles.txt}>
								Les associations s'engagent et militent
								activement en faveur de la cause
								environnementale. Grâce à Echo Alliance, elles
								bénéficient d'une mobilisation accrue de
								bénévoles qui partagent les mêmes valeurs et
								s'attachent à un même but.
							</Text>
						</View>
						<View style={styles.boutons3}>
							<TouchableOpacity style={styles.buttonC}>
								<Text style={styles.textButton}>Charte</Text>
							</TouchableOpacity>
							<View style={styles.divboutons}>
								<TouchableOpacity
									style={styles.ICbutton}
									onPress={() =>
										navigation.navigate(
											"AssociationInscription"
										) + handleModalAssociation()
									}
								>
									<Text style={styles.textButton}>
										Inscription
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.ICbutton}
									onPress={() =>
										navigation.navigate(
											"AssociationConnection"
										) + handleModalAssociation()
									}
								>
									<Text style={styles.textButton}>
										Connexion
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>

				<Modal
					visible={modalEntreprise}
					animationType="fade"
					transparent
				>
					<View style={styles.modalContainer}>
						<FontAwesome
							name="rotate-right"
							size={25}
							color="#ffffff"
							onPress={() => handleModalEntreprise()}
						/>
						<TouchableOpacity
							style={styles.crossContainer}
							onPress={() => handleModalEntreprise()}
						>
							<Image
								style={styles.cross}
								source={require("../assets/logo-cross.png")}
							/>
						</TouchableOpacity>
						<Text style={styles.title2}>
							<Text style={styles.benevole}>Entreprises</Text>
						</Text>
						<View style={styles.texte}>
							<Text style={styles.txt}>
								Les entreprises adhérentes aux valeurs d'Echo
								Alliance offrent des cadeaux et des réductions
								aux bénévoles participant aux évènements
								associatifs. De part leur engagement, elles
								recoivent une meilleure visibilité et une
								reconnaisance sur le marché, tout en prenant
								part en faveur de la cause verte.
							</Text>
						</View>
						<View style={styles.boutons3}>
							<TouchableOpacity style={styles.buttonC}>
								<Text style={styles.textButton}>Charte</Text>
							</TouchableOpacity>
							<View style={styles.divboutons}>
								<TouchableOpacity
									style={styles.ICbutton}
									onPress={() =>
										navigation.navigate(
											"EntrepriseInscription"
										) + handleModalEntreprise()
									}
								>
									<Text style={styles.textButton}>
										Inscription
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={styles.ICbutton}
									onPress={() =>
										navigation.navigate(
											"EntrepriseConnection"
										) + handleModalEntreprise()
									}
								>
									<Text style={styles.textButton}>
										Connexion
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>

				<TouchableOpacity
					onPress={() => handleModalBénévol()}
					style={styles.button}
					activeOpacity={0.8}
				>
					<Text style={styles.textButton}>Bénévoles</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => handleModalAssociation()}
					style={styles.button}
					activeOpacity={0.8}
				>
					<Text style={styles.textButton}>Associations</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => handleModalEntreprise()}
					style={styles.button}
					activeOpacity={0.8}
				>
					<Text style={styles.textButton}>Entreprises</Text>
				</TouchableOpacity>
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
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: "rgba(52, 52, 52, 0.8)",
	},
	title: {
		fontSize: 30,
		fontWeight: "600",
		fontWeight: "bold",
		color: "#ffffff",
	},
	echo: {
		fontSize: 30,
		fontWeight: "600",
		color: "#0CA789",
		fontWeight: "bold",
	},
	button: {
		alignItems: "center",
		paddingTop: 15,
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
	ICbutton: {
		alignItems: "center",
		paddingTop: 15,
		width: "49%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
		marginBottom: 30,
		borderWidth: 1,
	},
	textButton: {
		color: "#ffffff",
		height: 40,
		fontWeight: "600",
		fontSize: 20,

		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},

	modalContainer: {
		flex: 1,
		backgroundColor: "#ffffff",
		alignItems: "center",
		justifyContent: "space-between",
	},

	divboutons: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		width: "80%",
		borderRadius: 10,
	},
	buttonC: {
		alignItems: "center",
		backgroundColor: "#0CA789",
		borderRadius: 10,
		paddingTop: 15,
		marginBottom: 5,
		borderWidth: 1,
	},
	buttons: {
		alignItems: "center",
		paddingTop: 15,
		backgroundColor: "#0CA789",
		borderRadius: 10,
		borderWidth: 1,
	},
	benevole: {
		color: "#0CA789",
		fontSize: 30,
		fontWeight: "600",
		alignItems: "center",
	},
	texte: { margin: 5 },
	txt: { fontSize: 20, textAlign: "center" },
	cross: {
		height: 30,
		width: 30,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		marginLeft: 300,
	},
});
