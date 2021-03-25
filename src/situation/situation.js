import * as React from 'react';
import { View, Pressable, StyleSheet, TextInput, Text, Modal, Image } from 'react-native';
import Header from '../header'
import * as mixins from '../common/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    // height: 155,
    height: mixins.moderateScale(160),
    // backgroundColor: 'green',
  },
  body: {
    flex: 0.9,
    padding: 15,
  },
  container1: {
    flex: 0.7,
    alignItems: 'center',
  },
  container2: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  desc: {
    fontSize: mixins.moderateScale(11, 0.3),
    color: 'black',
    textAlign: 'left',
    marginTop: 15,
  },
  para2: {
    marginTop: 40,
  },
  button: {
    height: 55,
    width: '80%',
    backgroundColor: '#513CDE',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 17,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '300',
    fontSize: mixins.moderateScale(12, 0.3),
    textAlign: 'justify',
    letterSpacing: 1,
  },
  heading: {
    fontSize: mixins.moderateScale(12, 0.3),
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  link: {
    color: 'mediumblue',
    // backgroundColor: 'red',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#EEEEEE",
    flex: 0.9,
    width: '89%',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  button1: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalImage: {
    width: '80%',
    height: 200,
    alignSelf: 'center',
    // resizeMode: "center",
  },
  top:{
    width:'100%',
    height: '92%',
    // backgroundColor: 'green',
  },
  footer:{
    borderTopWidth: 1,
    width:'120%',
    height: '8%',
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    paddingRight:25,
  },
  bold:{
    fontWeight:'bold',
    letterSpacing: 0.4,
  },
  modalHead:{
    fontSize: mixins.moderateScale(11, 0.3),
    fontWeight:'bold',
    color:'black',
  },
  modalDesc:{
    marginTop: 2,
    width: '80%',
  }

});
function Situation() {

  const [showModal, setShowModal] = React.useState(false);
  const modalImage = require('../../assets/icons/teach.png');
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.top}>
            <Image style={styles.modalImage} source={modalImage} />
            <View>
              <Text style={[styles.desc, styles.heading, styles.link]}>
                O que significa minha situação?
            </Text>
              <Text style={[styles.desc,styles.modalHead]}>
                Regular:
            </Text>
              <Text style={[styles.desc, styles.modalDesc]}>
                Quando não há nenhuma
                pendência no cadastro do
                contribuinte.
            </Text>
            </View>
              </View>
            <View style={styles.footer}>
            <Pressable
              style={[styles.linkWrapper]}
              onPress={() => setShowModal(!showModal)}
            >
              <Text style={[styles.desc,styles.bold, styles.link]}>ENTENDI</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Header
          bgColor='#AAC1AD'
          imageUrl={require('../../assets/icons/ladyWithDog.png')}
          heading='Situação CPF'
          firstLine='Aqui você pode verificar'
          secondLine='a situação do seu CPF.'
        />
      </View>
      <View style={styles.body}>
        <View style={styles.container1}>
          <Text style={styles.desc}>
            Situação Cadastral
        </Text>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>
              REFGULAR
          </Text>
          </Pressable>
          <Text style={styles.desc}>
            Nome
        </Text>
          <Text style={styles.heading}>
            JOÃO SILVA SANTOS
        </Text>
          <Text style={[styles.desc, styles.para2]}>
            Data de inscrição
        </Text>
          <Text style={styles.heading}>
            08/07/2010
        </Text>
          <Text style={[styles.desc, styles.para2]}>
            CPF
        </Text>
          <Text style={styles.heading}>
            000.000.000-00
        </Text>
        </View>
        <View style={[styles.container2]}>
          <Pressable onPress={() => setShowModal(true)}>
            <Text style={[styles.desc, styles.link]}>
              O que significa minha situação?
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Situation;