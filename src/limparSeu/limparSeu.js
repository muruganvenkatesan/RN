import * as React from 'react';
import { View, Pressable, StyleSheet, TextInput, Text } from 'react-native';
import Header from '../header';
import Card from '../consulta/card';
import * as mixins from '../common/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: mixins.moderateScale(160),
    // backgroundColor: 'green',
  },
  body: {
    flex: 0.9,
    padding: mixins.moderateScale(15),
  },
  cardWrapper: {
    // backgroundColor: '#EEEEEE',
    backgroundColor: '#AAC1AD',
    alignSelf: 'center',
    // width: '90%',
    // height: '30%',
    height: mixins.calculateHeightPercent('22%'),
    width: mixins.calculateWidthPercent('88%'),
    // maxHeight: '35%',
    // marginTop: -22,
    marginTop: mixins.moderateScale(30),
    borderRadius: mixins.moderateScale(15),
  },
});
function LimparSeu() {
  const money = require('../../assets/icons/money.png');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          bgColor='#FFDDB8'
          // imageUrl={require('../../assets/icons/ladyWithDog.png')}
          heading='Limpar Seu Nome'
          firstLine='Separamos um guia para você'
          secondLine='aprender a limpar seu nome.'
        />
      </View>
      <View style={styles.body}>
      <View style={styles.cardWrapper}>
          <Card
            imageUrl={money}
            heading='Como limpar meu nome -'
            secondHeading='Guia definitivo'
            firstLine='Aprenda o passo-a-passo'
            secondLine='para finalmente limpar'
            thirdLine='seu nome.'
            limpar={true}
            link='LEIA'
          />
        </View>
      </View>
    </View>
  );
}


export default LimparSeu;