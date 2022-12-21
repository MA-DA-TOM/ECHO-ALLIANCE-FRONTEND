import React from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBenevole } from '../reducers/user';

import {
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	SafeAreaView,
	TextInput,
} from "react-native";

import {updateEmail} from '../reducers/user';

const BACKEND_ADRESS = '10.33.210.64:3000';


export default function BenevoleInscription({navigation}) {

	const dispatch = useDispatch();
	const user = useSelector((state) => state.user.value);

	const [signUpNom, setSignUpNom] = useState(null);
	const [signUpPrenom, setSingUpPrenom] = useState(null);
	const [signUpEmail, setSignUpEmail] = useState(null);
	const [signUpPassword, setSignUpPassword] = useState(null);
	const [signUpDateNaissance, setSignUpDateNaissance] = useState(null);

	// const handleSubmit = () => {
	// 	dispatch(updateEmail(email));
	// 	navigation.navigate('Home');
	//   };

	
	const handleRegister = () => {
	
		fetch(`http://${BACKEND_ADRESS}/benevole/inscription`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 
                prenom: signUpPrenom, 
                nom: signUpNom, 
                email: signUpEmail, 
                password: signUpPassword,
                dateNaissance: signUpDateNaissance,
             },
                ),
		}).then(response => response.json())
		.then(data => {

            console.log(data);
            
			// if (data.result) {
			// 	console.log(data);
			// 	dispatch(addBenevole(data));
			// 	setSignUpNom('');
			// 	setSingUpPrenom('');
			// 	setSignUpEmail('');
			// 	setSignUpPassword('');
			// 	setSignUpDateNaissance('');
            // }

            if (data.result === true){
               navigation.navigate('Home');
            }

			});
	};

	return (
		<KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
        <View style={styles.background}>
            <SafeAreaView>
                <Text style={styles.nom}>Nom</Text>
                <TextInput style={styles.input} onChangeText={(value) => setSignUpNom(value)} value={signUpNom}/>

                <Text style={styles.prenom}>Prénom</Text>

                <TextInput style={styles.input} onChangeText={(value) => setSingUpPrenom(value)} value={signUpPrenom} />

                <Text style={styles.date}>Date de naissance</Text>
				<TextInput style={styles.input} onChangeText={(value) => setSignUpDateNaissance(value)} value={signUpDateNaissance}/>

                <Text style={styles.email}>Email</Text>
                <TextInput style={styles.input} onChangeText={(value) => setSignUpEmail(value)} value={signUpEmail}/>

                <Text style={styles.mdp}>Mot de passe</Text>

                <TextInput style={styles.input} onChangeText={(value) => setSignUpPassword(value)} value={signUpPassword}/>
            </SafeAreaView>
        </View>

        <TouchableOpacity
            onPress={() => handleRegister()}
            style={styles.button}
            activeOpacity={0.8}
        >
            <Text style={styles.textButton}>Inscription</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        justifyContent: "space-around",
    },

background: {
    backgroundColor: "#439798",
    borderRadius: 10,
    margin: "3%",
},

input: {
    height: 35,
    margin: 15,
    borderWidth: 1,
    width: 320,
    backgroundColor: "#ffffff",
    padding: 5,
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

    elevation: 25,
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
nom: { color: "#ffffff", marginLeft: 5, marginTop: 5, fontWeight: "bold" },
prenom: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
geolocalisation: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
date: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
email: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
mdp: { color: "#ffffff", marginLeft: 5, fontWeight: "bold" },
});
