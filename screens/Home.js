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
        <View style={styles.modalContainer}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" onPress={() => handleModalBénévol()} />
          <Text style={styles.textButton}>Bénévole</Text>
          <Text style={styles.textButton}>TEXTE A REMPLIR POUR EXPLIQUER DES TRUCS SUR LES BENEVOLES</Text>
          <View style={styles.register}>
            <TouchableOpacity>
              <Text style={styles.textButton}>connection</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textButton}>inscription</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={modalAssociation} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" onPress={() => handleModalAssociation()} />
          <Text>Association</Text>
          <Text>TEXTE A REMPLIR POUR EXPLIQUER DES TRUCS SUR LES ASSOCIATIONS</Text>
          <TouchableOpacity>
            <Text>connection</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>inscription</Text>
          </TouchableOpacity>
        </View>

      </Modal>

      <Modal visible={modalEntreprise} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <FontAwesomeIcon icon="fa-solid fa-xmark" onPress={() => handleModalEntreprise()} />
          <Text>Entreprise</Text>
          <Text>TEXTE A REMPLIR POUR EXPLIQUER DES TRUCS SUR LES ENTREPRISES </Text>
          <TouchableOpacity>
            <Text>connection</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>inscription</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity onPress={() => handleModalBénévol()} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textButton}>Bénévole</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleModalAssociation()} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textButton}>Association</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleModalEntreprise()} style={styles.button} activeOpacity={0.8}>
        <Text style={styles.textButton}>Entreprise</Text>
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
  modalContainer: {
    flex: 1,
    backgroundColor: '#001234',
    color: '#ffffff',

  }
});
