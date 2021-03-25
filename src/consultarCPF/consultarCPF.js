import * as React from 'react';
import { View, Pressable, StyleSheet, TextInput, Text } from 'react-native';
import Header from '../header'
import { useNavigation } from '@react-navigation/native';
import { NAV_CONST } from '../constants/navconst';
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
    flex: 0.8,
    padding: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  input: {
    backgroundColor: 'white',
    // width: '95%',
    // height: '80%',
    height: mixins.moderateScale(65),
    width: mixins.calculateWidthPercent('75%'),
    borderRadius: 15,
    padding: 10,
  },
  inputWrapper: {
    // height: 70,
    // width: '80%',
    height: mixins.moderateScale(80),
    width: mixins.calculateWidthPercent('80%'),
    backgroundColor: '#513CDE',
    marginBottom: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // height: 45,
    // width: '80%',
    height: mixins.moderateScale(50),
    width: mixins.calculateWidthPercent('80%'),
    backgroundColor: '#513CDE',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#ffffff',
    fontWeight: '300',
    fontSize: mixins.moderateScale(12, 0.3),
    textAlign: 'justify',
    letterSpacing: 1,
  }
});
function ConsultaCPF() {
  const [input1, setInput1] = React.useState('');
  const [input2, setInput2] = React.useState('');
  const navigation = useNavigation();
  function onConsultar(){
    navigation.navigate(NAV_CONST.situation)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          bgColor='#AAC1AD'
          imageUrl={require('../../assets/icons/ladyWithLaptop.png')}
          heading='Consultar CPF'
          firstLine='Consulte a regularidade'
          secondLine='do seu CPF abaixo:'
        />
      </View>
      <View style={styles.body}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={setInput1}
            value={input1}
            placeholder='Digite aqui seu CPF...'
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={setInput2}
            value={input2}
            placeholder='Digite sua data de nascimento'
          />
        </View>
        <Pressable style={styles.button} onPress={onConsultar}>
          <Text style={styles.buttonText}>
            CONSULTAR
          </Text>
        </Pressable>

      </View>
    </View>
  );
}

export default ConsultaCPF;