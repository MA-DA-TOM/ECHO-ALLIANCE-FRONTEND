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
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Home() {
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
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.subcontainer}>
				<Text style={styles.title}>
					Welcome to <Text style={styles.echo}>Echo Alliance</Text>
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
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed non risus. Suspendisse lectus tortor,
							dignissim sit amet, adipiscing nec, ultricies sed,
							dolor. Cras elementum ultrices diam. Maecenas ligula
							massa, varius a, semper congue, euismod non, mi.
							Proin porttitor, orci nec nonummy molestie, enim est
							eleifend mi, non fermentum diam nisl sit amet erat.
							Duis semper. Duis arcu massa, scelerisque vitae,
							consequat in, pretium a, enim. Pellentesque congue.
							Ut in risus volutpat libero pharetra tempor. Cras
							vestibulum bibendum augue. Praesent egestas leo in
							pede. Praesent blandit odio eu enim. Pellentesque
							sed dui ut augue blandit sodales. Vestibulum ante
							ipsum primis in faucibus orci luctus et ultrices
							posuere cubilia Curae; Aliquam nibh. Mauris ac
							mauris sed pede pellentesque fermentum. Maecenas
							adipiscing ante non diam sodales hendrerit.
						</Text>
					</View>
					<View style={styles.boutons3}>
						<TouchableOpacity style={styles.buttonC}>
							<Text style={styles.textButton}>Charte</Text>
						</TouchableOpacity>
						<View style={styles.divboutons}>
							<TouchableOpacity style={styles.ICbutton}>
								<Text style={styles.textButton}>
									Inscription
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.ICbutton}>
								<Text style={styles.textButton}>Connexion</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>

			<Modal visible={modalAssociation} animationType="fade" transparent>
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
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed non risus. Suspendisse lectus tortor,
							dignissim sit amet, adipiscing nec, ultricies sed,
							dolor. Cras elementum ultrices diam. Maecenas ligula
							massa, varius a, semper congue, euismod non, mi.
							Proin porttitor, orci nec nonummy molestie, enim est
							eleifend mi, non fermentum diam nisl sit amet erat.
							Duis semper. Duis arcu massa, scelerisque vitae,
							consequat in, pretium a, enim. Pellentesque congue.
							Ut in risus volutpat libero pharetra tempor. Cras
							vestibulum bibendum augue. Praesent egestas leo in
							pede. Praesent blandit odio eu enim. Pellentesque
							sed dui ut augue blandit sodales. Vestibulum ante
							ipsum primis in faucibus orci luctus et ultrices
							posuere cubilia Curae; Aliquam nibh. Mauris ac
							mauris sed pede pellentesque fermentum. Maecenas
							adipiscing ante non diam sodales hendrerit.
						</Text>
					</View>
					<View style={styles.boutons3}>
						<TouchableOpacity style={styles.buttonC}>
							<Text style={styles.textButton}>Charte</Text>
						</TouchableOpacity>
						<View style={styles.divboutons}>
							<TouchableOpacity style={styles.ICbutton}>
								<Text style={styles.textButton}>
									Inscription
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.ICbutton}>
								<Text style={styles.textButton}>Connexion</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>

			<Modal visible={modalEntreprise} animationType="fade" transparent>
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
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed non risus. Suspendisse lectus tortor,
							dignissim sit amet, adipiscing nec, ultricies sed,
							dolor. Cras elementum ultrices diam. Maecenas ligula
							massa, varius a, semper congue, euismod non, mi.
							Proin porttitor, orci nec nonummy molestie, enim est
							eleifend mi, non fermentum diam nisl sit amet erat.
							Duis semper. Duis arcu massa, scelerisque vitae,
							consequat in, pretium a, enim. Pellentesque congue.
							Ut in risus volutpat libero pharetra tempor. Cras
							vestibulum bibendum augue. Praesent egestas leo in
							pede. Praesent blandit odio eu enim. Pellentesque
							sed dui ut augue blandit sodales. Vestibulum ante
							ipsum primis in faucibus orci luctus et ultrices
							posuere cubilia Curae; Aliquam nibh. Mauris ac
							mauris sed pede pellentesque fermentum. Maecenas
							adipiscing ante non diam sodales hendrerit.
						</Text>
					</View>
					<View style={styles.boutons3}>
						<TouchableOpacity style={styles.buttonC}>
							<Text style={styles.textButton}>Charte</Text>
						</TouchableOpacity>
						<View style={styles.divboutons}>
							<TouchableOpacity style={styles.ICbutton}>
								<Text style={styles.textButton}>
									Inscription
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.ICbutton}>
								<Text style={styles.textButton}>Connexion</Text>
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
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		alignItems: "center",
		justifyContent: "space-around",
	},
	title: {
		width: "100%",
		fontSize: 30,
		fontWeight: "600",
		alignItems: "center",
	},
	echo: {
		color: "#0CA789",
	},
	button: {
		alignItems: "center",
		paddingTop: 15,
		width: "80%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
	},
	ICbutton: {
		alignItems: "center",
		paddingTop: 15,
		width: "49%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
		marginBottom: 30,
	},
	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
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
	},
	buttons: {
		alignItems: "center",
		paddingTop: 15,
		backgroundColor: "#0CA789",
		borderRadius: 10,
	},
	benevole: {
		color: "#0CA789",
		width: "100%",
		fontSize: 30,
		fontWeight: "600",
		alignItems: "center",
	},
	texte: { margin: 5 },
	cross: {
		height: 30,
		width: 30,
		alignItems: "flex-end",
		justifyContent: "flex-end",
		marginLeft: 300,
	},
});
