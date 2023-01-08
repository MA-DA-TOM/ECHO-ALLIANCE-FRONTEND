import React from "react";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
	TextInput,
	ScrollView,
	SafeAreaView,
} from "react-native";
import { Marker } from "react-native-maps";
import MapView from "react-native-maps";
import { useState, useEffect } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSelector } from 'react-redux';



export default function AssociationAddEvent({ navigation }) {

	const BACKEND_ADRESS = '192.168.1.62:3000';

	const UserReducerValue = useSelector((state) => state.user.value);
	const assoEmail = UserReducerValue[0].email;
	const assoCreator = UserReducerValue[0].ID;
	const [name, setName] = useState(null);
	const [description, setDescription] = useState(null);
	const [dateDebut, setDateDebut] = useState(new Date());
	const [dateFin, setDateFin] = useState(new Date());
	const [coordinates, setCoordinates] = useState(null);
	const [codePostal, setCodePostal] = useState(null);
	const [city, setCity] = useState(null);
	const [rue, setRue] = useState(null);
	const [numero, setNumero] = useState(null);
	let durationFinal = null;


	const handleDuration = () => {
		let durationHeure = (dateFin.getHours()) - (dateDebut.getHours())

		let durationMinute = (((dateFin.getMinutes()) - (dateDebut.getMinutes())) * 10) / 6;

		durationFinal = `${durationHeure}.${Math.round(durationMinute)}`


	}

	const [visible, setVisible] = useState(false);
	const [mode, setMode] = useState('');

	const showPicker = () => {
		setVisible(!visible)
	}

	const showDate = () => {
		setMode('date')
		showPicker()
	}

	const showTime = () => {
		setMode('time')
		showPicker()
	}

	const dateDebutChange = (event, selectedDate) => {
		const currentDate = selectedDate || dateDebut
		setVisible(false)
		setDateDebut(currentDate)
	}

	const dateFinChange = (event, selectedDate) => {
		const currentDate = selectedDate
			|| dateFin
		setVisible(false)
		setDateFin(currentDate)
	}

	const handleLongPress = (e) => {
		setCoordinates(e.nativeEvent.coordinate)
	}

	if (coordinates) {
		fetch(`http://api-adresse.data.gouv.fr/reverse/?lon=${coordinates.longitude}&lat=${coordinates.latitude}`)
			.then((response) => response.json())
			.then((data) => {
				setCodePostal(data.features[0].properties.postcode);
				setCity(data.features[0].properties.city);
				setRue(data.features[0].properties.street);
				setNumero(data.features[0].properties.housenumber);
			});
	};

	handleDuration();

	const handleEvent = () => {

		fetch(`http://${BACKEND_ADRESS}/evenement/inscription`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name: name, description: description, startDate: dateDebut, endDate: dateFin, latitude: coordinates.latitude, longitude: coordinates.longitude, number: numero, street: rue, city: city, zipCode: codePostal, assoCreator: assoCreator, duration: durationFinal }),
		}).then((response) => response.json())
			.then((data) => {
				if (data.result === true) {
					eventData = data.data._id;
					console.log(eventData)
					fetch(`http://${BACKEND_ADRESS}/association/addEvent`, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ email: assoEmail, assoEvents: eventData }),
					})
						.then((response) => response.json())
						.then((data) => {
							console.log(data)
							navigation.navigate('AssociationMenu')
						})
				}
			}
			)
	}


	return (

		<ImageBackground
			source={require("../assets/volunteer.jpg")}
			style={styles.background}
		>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === "ios" ? "padding" : "height"}
			>
				<SafeAreaView>
					{visible &&
						<DateTimePicker
							value={new Date()}
						/>
					}
					<View style={styles.container2}>
						<ScrollView>
							<View style={styles.background}>
								<View>
									<Text style={styles.txt}>Titre</Text>
									<TextInput
										style={styles.input}
										onChangeText={(value) => setName(value)}
										value={name}
									/>
								</View>
								<View>
									<Text style={styles.txt}>Description</Text>
									<TextInput
										multiline={true}
										maxLength={500}
										style={styles.inputDescription}
										onChangeText={(value) => setDescription(value)}
										value={description}
									/>
								</View>


								<View style={styles.container21}>
									<Text style={styles.txt}>Votre événement débute le</Text>
								</View>
								<View style={styles.input}>
									<Text onPress={showDate}>
										{`${('0' + dateDebut.getDate()).slice(-2)}/${('0' + (dateDebut.getMonth() + 1)).slice(-2)}/${dateDebut.getFullYear()}`}
									</Text>
								</View>
								<View style={styles.container21}>
									<Text style={styles.txt}>à</Text>
								</View>
								<View style={styles.input}>
									<Text onPress={showTime}>
										{`${('0' + dateDebut.getHours()).slice(-2)}:${('0' + dateDebut.getMinutes()).slice(-2)}`}
									</Text>
									{visible &&
										<DateTimePicker
											value={dateDebut}
											mode={mode}
											onChange={dateDebutChange}
										/>}
								</View>

								<View style={styles.container21}>
									<Text style={styles.txt}>jusqu'à</Text>

								</View>
								<View style={styles.input}>
									<Text onPress={showTime}>
										{`${('0' + dateFin.getHours()).slice(-2)}:${('0' + dateFin.getMinutes()).slice(-2)}`}
									</Text>
									{visible &&
										<DateTimePicker
											value={dateFin}
											mode={mode}
											onChange={dateFinChange}
										/>}
								</View>
								<View style={styles.container21}>
									<Text style={styles.txt}>Soit une durée totale de : </Text>
								</View>
								<View style={styles.input}>
									<Text>{durationFinal}h</Text>
								</View>


								{/* {setErrorDuree && <Text>Votre événement fini avant qu'il ne commence</Text>} */}
								<View style={styles.space}>
									<Text style={styles.txt}>

										Restez appuyé pour selectionner l'emplacement de votre événement.
									</Text>
									<MapView
										mapType="hybrid"
										style={{ height: 400, width: "100%", marginLeft: '5%', marginRight: '5%' }}
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
									<Text style={styles.txt}>Code Postal</Text>
									<TextInput
										style={styles.input}
										onChangeText={(value) =>
											setCodePostal(value)
										}
										value={codePostal}
									/>

									<Text style={styles.txt}>Ville</Text>
									<TextInput
										style={styles.input}
										onChangeText={(value) => setCity(value)}
										value={city}
									/>

									<Text style={styles.txt}>Rue</Text>
									<TextInput
										style={styles.input}
										onChangeText={(value) => setRue(value)}
										value={rue}
									/>

									<Text style={styles.txt}>Numéro</Text>
									<TextInput
										style={styles.input}
										onChangeText={(value) =>
											setNumero(value)
										}
										value={numero}
									/>
								</View>
							</View>

						</ScrollView>
					</View >
				</SafeAreaView>

				<View style={styles.container3}>
					<TouchableOpacity
						onPress={() => handleEvent()}
						style={styles.button}
						activeOpacity={0.8}
					>
						<Text style={styles.textButton}>Valider</Text>
					</TouchableOpacity>
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
		marginBottom: "10%",
		marginTop: "10%",
		flexWrap: "wrap",
		flexDirection: "column",
	},

	container3: {
		alignItems: "center",
		marginBottom: "10%",
	},

	container21: {
		flexDirection: "column",
		flexWrap: "wrap",
		width: '95%'
	},
	container211: { marginLeft: 5, padding: 5 },
	container212: {
		marginLeft: 5,
		marginTop: 5,
		padding: 5,
	},
	container22: {
		margin: 5,
		padding: 5,
		alignItems: "center",
		borderWidth: 1,
		height: 130,
		width: 130,
		borderColor: "#ffffff",
	},

	txt: {
		fontWeight: "bold",
		color: "#ffffff",
		fontWeight: "bold",
		textDecorationLine: "underline",
		fontSize: 15,
		marginLeft: '5%'
	},
	item: { color: "#ffffff" },
	add: { height: 20, width: 20, marginLeft: 10 },
	map: {
		fontWeight: "bold",
		color: "#ffffff",
		fontWeight: "bold",
		fontSize: 15,
	},
	mapimage: {
		height: 60,
		width: 60,
		marginTop: 30,
	},
	button: {
		alignItems: "center",
		paddingTop: 8,
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
	email: {
		color: "#ffffff",
		marginLeft: 5,
		marginTop: 5,
		fontWeight: "bold",
	},
	input: {
		height: 35,
		margin: 15,
		borderWidth: 1,
		width: 350,
		backgroundColor: "#ffffff",
		padding: 5,
	},
	inputDescription: {
		margin: 15,
		borderWidth: 1,
		width: 350,
		height: 250,
		backgroundColor: "#ffffff",
		padding: 5,
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
});
