import React from "react";
import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	SafeAreaView,
	TextInput,
	ScrollView,
	Modal,
	Image,
} from "react-native";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";
import { useState } from "react";

// Grabbed from emailregex.com
const EMAIL_REGEX =
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const TEL_REGEX =
	/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;

const SIRET_REGEX = /\d{14}/g;

const WEB_REGEX =
	/^(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})(\/([\da-z\.-]+))*\/?(([\w\.-]+)\.([\da-z]{2,6}))?((\#[\w\.-]+)|(\?([\da-z]+(=[\da-z]+)?)(&([\da-z]+(=[\da-z]+)?))*))?/i;

export default function AssociationInscription({ navigation }) {
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
	const [password1, setPassword1] = useState();
	const [password2, setPassword2] = useState(null);
	const [webSite, setWebSite] = useState(null);
	const [siret, setSiret] = useState(null);
	const [description, setDescription] = useState(null);
	const [coordinates, setCoordinates] = useState(null);
	const [codePostal, setCodePostal] = useState(null);
	const [city, setCity] = useState(null);
	const [rue, setRue] = useState(null);
	const [numero, setNumero] = useState(null);
	const [nomDirigeant, setNomDirigeant] = useState(null);
	const [prenomDirigeant, setPrenomDirigeant] = useState(null);
	const [telephone, setTelephone] = useState(null);

	const [accountError, setAccountError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [webSiteError, setWebSiteError] = useState(false);
	const [siretError, setSiretError] = useState(false);
	const [telError, setTelError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);

	const handleLongPress = (e) => {
		setCoordinates(e.nativeEvent.coordinate);
		console.log(coordinates);

		fetch(
			`http://api-adresse.data.gouv.fr/reverse/?lon=${coordinates.longitude}&lat=${coordinates.latitude}`
		)
			.then((response) => response.json())
			.then((data) => {
				setCodePostal(data.features[0].properties.postcode);
				setCity(data.features[0].properties.city);
				setRue(data.features[0].properties.street);
				setNumero(data.features[0].properties.housenumber);
			});
	};

	const handleInscription = () => {
		if (
			password1 === password2 &&
			EMAIL_REGEX.test(email) &&
			WEB_REGEX.test(webSite) &&
			TEL_REGEX.test(telephone) &&
			SIRET_REGEX.test(siret)
		) {
			fetch("http://10.33.211.185:3000/entreprise/inscription", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name,
					password: password1,
					description: description,
					siteWeb: webSite,
					email: email,
					siret: siret,
					latitude: coordinates.latitude,
					longitude: coordinates.longitude,
					numero: numero,
					rue: rue,
					ville: city,
					codePostal: codePostal,
					nom: nomDirigeant,
					prenom: prenomDirigeant,
					telephone: telephone,
				}),
			})
				.then((response) => response.json())
				.then((data) => {
					if (data.result === false) {
						setAccountError(true);
					}
					if (data.result === true) {
						navigation.navigate("Home");
					}
				});
		}
		if (password1 !== password2) {
			setPasswordError(!passwordError);
		}
		if (!EMAIL_REGEX.test(email)) {
			setEmailError(!emailError);
		}
		if (!WEB_REGEX.test(webSite)) {
			setWebSiteError(!webSiteError);
		}
		if (!SIRET_REGEX.test(siret)) {
			setSiretError(!siretError);
		}
		if (webSite !== null && !WEB_REGEX.test(webSite)) {
			setWebSiteError(!webSiteError);
		}
		if (!TEL_REGEX.test(telephone)) {
			setTelError(!telError);
		}
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<SafeAreaView>
				<View style={styles.container2}>
					<ScrollView>
						<View style={styles.background}>
							<View>
								<Text style={styles.nom}>
									Nom de l'entreprise
								</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) => setName(value)}
									value={name}
								/>
							</View>
							<View>
								<Text style={styles.adresse}>Email</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) => setEmail(value)}
									value={email}
								/>
								{emailError && (
									<Text style={styles.error}>
										email error
									</Text>
								)}
							</View>
							<View>
								<Text style={styles.rna}>Password</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) =>
										setPassword1(value)
									}
									value={password1}
									secureTextEntry={true}
								/>
							</View>
							<View>
								<Text style={styles.rna}>Password</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) =>
										setPassword2(value)
									}
									value={password2}
									secureTextEntry={true}
								/>
								{passwordError && (
									<Text style={styles.error}>
										password error
									</Text>
								)}
							</View>
							<View>
								<Text style={styles.email}>
									Site Web (optionel)
								</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) => setWebSite(value)}
									value={webSite}
								/>
								{webSiteError && (
									<Text style={styles.error}>
										website error
									</Text>
								)}
							</View>
							<View>
								<Text style={styles.mdp}>Numéro siret</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) => setSiret(value)}
									value={siret}
								/>
								{siretError && (
									<Text style={styles.error}>
										Invalid siret number
									</Text>
								)}
							</View>
							<View>
								<Text style={styles.mdp}>
									Description de votre association (raison
									d'être)
								</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) =>
										setDescription(value)
									}
									value={description}
								/>
							</View>
							<View>
								<Text style={styles.mdp}>
									Nom du dirigeant (cette information ne sera
									pas visible par les autres utilisateurs,
									elle nous sert à vous contacter en cas de
									problème)
								</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) =>
										setNomDirigeant(value)
									}
									value={nomDirigeant}
								/>

								<Text style={styles.mdp}>
									Prenom du dirigeant (cette information ne
									sera pas visible par les autres
									utilisateurs, elle nous sert à vous
									contacter en cas de problème)
								</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) =>
										setPrenomDirigeant(value)
									}
									value={prenomDirigeant}
								/>

								<Text style={styles.mdp}>
									Telephone (cette information ne sera pas
									visible par les autres utilisateurs, elle
									nous sert à vous contacter en cas de
									problème)
								</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) =>
										setTelephone(value)
									}
									value={telephone}
								/>
								{telError && (
									<Text style={styles.error}>
										Invalid telephone number
									</Text>
								)}
							</View>

							<View style={styles.space}>
								<Text style={styles.mdp}>
									{" "}
									Rester appuyer pour selectionner votre
									localisation. Cette localisation sera
									visible par tous les membres.{" "}
								</Text>
								<MapView
									mapType="hybrid"
									style={{ height: 400, width: 353 }}
									onLongPress={(e) => handleLongPress(e)}
								>
									{coordinates && (
										<Marker
											coordinate={coordinates}
											pinColor="red"
											title="Ma Position"
										/>
									)}
								</MapView>
							</View>

							<View>
								<Text style={styles.mdp}>Code Postal</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) =>
										setCodePostal(value)
									}
									value={codePostal}
								/>

								<Text style={styles.mdp}>Ville</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) => setCity(value)}
									value={city}
								/>

								<Text style={styles.mdp}>Rue</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) => setRue(value)}
									value={rue}
								/>

								<Text style={styles.mdp}>Numéro</Text>
								<TextInput
									style={styles.input}
									onChangeText={(value) => setNumero(value)}
									value={numero}
								/>
							</View>
						</View>
					</ScrollView>
					<TouchableOpacity
						onPress={() => handleInscription()}
						style={styles.button}
						activeOpacity={0.8}
					>
						<View>
							<Text style={styles.textButton}>Inscription</Text>
						</View>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	modal: {
		flex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: "#ffffff",
		justifyContent: "space-around",
	},

	container2: {
		justifyContent: "space-around",
		marginBottom: "5%",
		flexWrap: "wrap",
		flexDirection: "column",
	},
	background: {
		flexDirection: "column",
		backgroundColor: "#439798",
		borderRadius: 10,

		width: "95%",
	},

	input: {
		height: 35,
		margin: 15,
		borderWidth: 1,
		width: 325,
		backgroundColor: "#ffffff",
		padding: 5,
	},
	container2: {
		justifyContent: "space-between",

		marginLeft: "5%",
		flexWrap: "wrap",
		flexDirection: "column",
	},

	button: {
		alignItems: "center",
		paddingTop: 8,
		width: "80%",
		backgroundColor: "#0CA789",
		borderRadius: 10,
		marginLeft: "10%",
		borderWidth: 1,
		shadowOffset: {
			width: -10,
			height: 12,
		},
		shadowOpacity: 0.58,
		shadowRadius: 16.0,
		marginTop: "2%",
		marginBottom: "2%",
		elevation: 25,
	},
	space: {
		borderColor: "#ffffff",
		alignContent: "center",
		justifyContent: "center",
		height: 600,
	},
	textButton: {
		color: "#ffffff",
		height: 30,
		fontWeight: "600",
		fontSize: 16,
		textShadowColor: "#000000",
		textShadowOffset: { width: 0, height: 2 },
		textShadowRadius: 5,
	},
	nom: {
		color: "#ffffff",
		marginLeft: 5,
		marginTop: 5,
		fontWeight: "bold",
	},
	adresse: {
		color: "#ffffff",
		marginLeft: 5,
		fontWeight: "bold",
	},
	rna: {
		color: "#ffffff",
		marginLeft: 5,
		fontWeight: "bold",
	},
	email: {
		color: "#ffffff",
		marginLeft: 5,
		fontWeight: "bold",
	},
	mdp: {
		color: "#ffffff",
		marginLeft: 5,
		fontWeight: "bold",
	},
	photo: {
		height: 70,
		width: 70,
	},
	modalInscriptionError: {
		flex: 3,
		backgroundColor: "#000000",
	},
	error: {
		marginBottom: 10,
		color: "red",
	},
});
