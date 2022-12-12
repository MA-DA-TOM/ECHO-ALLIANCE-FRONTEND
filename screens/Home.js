import { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


export default function Home() {

  const [modalBénévole, setModalBénévole] = useState(false);
  const [modalAssociation, setModalAssociation] = useState(false);
  const [modalEntreprise, setModalEntreprise] = useState(false);


  // activé/désactivé Modal
  const handleModalBénévol = () => {
    setModalBénévole(!modalBénévole);
  }

  const handleModalAssociation = () => {
    setModalAssociation(!modalAssociation);
  }

  const handleModalEntreprise = () => {
    setModalEntreprise(!modalEntreprise);
  }


  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={styles.title}>Welcome to Echo Alliance</Text>

      <Modal visible={modalBénévole} animationType="fade" transparent>
        <View className={styles.modalContainer}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" onPress={() => handleModalBénévol()} />
          <Text>Bénévole</Text>
          <Text>TEXTE A REMPLIR POUR EXPLIQUER DES TRUCS SUR LES BENEVOLES</Text>
          <TouchableOpacity>connection</TouchableOpacity>
          <TouchableOpacity>inscription</TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={modalAssociation} animationType="fade" transparent>
        <View className={styles.modalContainer}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" onPress={() => handleModalAssociation()} />
          <Text>Association</Text>
          <Text>TEXTE A REMPLIR POUR EXPLIQUER DES TRUCS SUR LES ASSOCIATIONS</Text>
          <TouchableOpacity>connection</TouchableOpacity>
          <TouchableOpacity>inscription</TouchableOpacity>
        </View>

      </Modal>

      <Modal visible={modalEntreprise} animationType="fade" transparent>
        <View className={styles.modalContainer}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" onPress={() => handleModalEntreprise()} />
          <Text>Entreprise</Text>
          <Text>TEXTE A REMPLIR POUR EXPLIQUER DES TRUCS SUR LES ENTREPRISES </Text>
          <TouchableOpacity>connection</TouchableOpacity>
          <TouchableOpacity>inscription</TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => handleModalBénévol()} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textButton}>Go to map</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleModalAssociation()} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textButton}>Go to map</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleModalEntreprise()} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textButton}>Go to map</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '80%',
    fontSize: 38,
    fontWeight: '600',
  },
  button: {
    alignItems: 'center',
    paddingTop: 8,
    width: '80%',
    marginTop: 30,
    backgroundColor: '#ec6e5b',
    borderRadius: 10,
    marginBottom: 80,
  },
  textButton: {
    color: '#ffffff',
    height: 30,
    fontWeight: '600',
    fontSize: 16,
  },
});
