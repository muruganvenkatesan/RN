import * as React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
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
  },
  body: {
    flex: 1,
    padding: '9%',
  },
  heading: {
    fontSize: mixins.moderateScale(13, 0.3),
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
    // marginTop: 20,
  },
  desc: {
    fontSize: mixins.moderateScale(11, 0.3),
    color: 'black',
    textAlign: 'left',
    marginBottom: 15,
    marginTop: 5,
  },
});
function Politia() {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Header
          bgColor='#AAC1AD'
          imageUrl={require('../../assets/icons/lock.png')}
          heading='Política de'
          secondHeading='Privacidade'
          politia={true}
        // firstLine='Política de Privacidade'
        // secondLine='aprender a limpar seu nome.'
        />
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        <Text style={styles.heading}>
          Política de Privacidade
          
        </Text>
        <Text style={styles.desc}>
          A sua privacidade é importante para nós. É política do respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site , e outros sites que possuímos e operamos.
        </Text>
        <Text style={styles.desc}>
        Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
        </Text>
        <Text style={styles.desc}>
        Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
        </Text>
        <Text style={styles.desc}>
        Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
        </Text>

      </ScrollView>

    </ScrollView>
  );
}


export default Politia;