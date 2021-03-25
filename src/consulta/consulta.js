import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable , ScrollView ,Platform} from 'react-native';
import Card from './card';
import { useNavigation } from '@react-navigation/native';
import { NAV_CONST } from '../constants/navconst';
import * as mixins from '../common/mixins';

function Consulta() {
  const styles = StyleSheet.create({
    container: {
      flex:1,
      // backgroundColor: '#cdcfd1',
      // padding: 15,
    },
    topContainer: {
      flex:0.27,
      backgroundColor: '#FFDDB8',
      paddingTop: Platform.OS == 'android' ? mixins.moderateScale(25) : 0,
    },
    bottomContainer: {
      flex:0.73,
      backgroundColor: '#EEEEEE'
    },
    topWithImage: {
      flex: 1,
      flexDirection: 'row',
    },
    title: {
      width: mixins.calculateWidthPercent('50%'),
      alignSelf: 'center',
    },
    heading: {
      marginLeft: mixins.moderateScale(60),
      fontSize: mixins.moderateScale(15, 0.3),
      color: 'black',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    desc: {
      marginLeft: mixins.moderateScale(62),
      fontSize: mixins.moderateScale(11, 0.3),
      color: 'black',
      textAlign: 'left',
    },
    imageWrapper: {
      // width: '50%',
      // height: '90%',
      width: mixins.calculateWidthPercent('40%'),
      height: mixins.calculateHeightPercent('25%'),
      marginTop: 10,
    },
    image: {
      // width: '90%',
      // height: '90%',
      width: mixins.calculateWidthPercent('42%'),
      height: mixins.calculateHeightPercent('22%'),
      resizeMode: 'stretch',
    },
    cardWrapper: {
      backgroundColor: 'white',
      alignSelf: 'center',
      height: mixins.calculateHeightPercent('14%'),
      width: mixins.calculateWidthPercent('85%'),
      // height: 120,
      // width: '82%',
      // maxHeight: '35%',
      marginTop: mixins.moderateScale(-22),
      marginBottom: mixins.moderateScale(44),
      borderRadius: mixins.moderateScale(15),
      // marginTop: -22,
      // marginBottom: 44,
      // borderRadius: 15,
    },
    cardWrapper1: {
      // backgroundColor: 'red',
      flex: 1,
    }
  });
  const navigation = useNavigation();
  const ladyWithLaptop = require('../../assets/icons/ladyWithLaptop.png');
  const ladyWithTable = require('../../assets/icons/ladyWithTable.png');
  const money = require('../../assets/icons/money.png');
  const pigWithMoney = require('../../assets/icons/pigWithMoney.png');
  const lockAndKey = require('../../assets/icons/lock.png');

  function onCardSelect(cardNo) {
    switch(cardNo){
      case 1 : return navigation.navigate(NAV_CONST.consultarCPF);
      case 2 : return navigation.navigate(NAV_CONST.limparSeu);
      case 3 : return navigation.navigate(NAV_CONST.politia);
      default : return;
    }
  }
  return (
    <ScrollView contentContainerStyle={{flex:1}}>
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.topWithImage}>
          <View style={styles.title}>
            <Text style={styles.heading}>Consulta CPF</Text>
            <Text style={styles.desc}>Consulte seu CPF,</Text>
            <Text style={styles.desc}>limpe seu nome e </Text>
            <Text style={styles.desc}>ganhe dinheiro!</Text>
          </View>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={ladyWithLaptop} />
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Pressable  style={styles.cardWrapper} onPress={()=> onCardSelect(1)}>
          <View style={styles.cardWrapper1}>
            <Card
              imageUrl={ladyWithTable}
              heading='Situação Cadastral CPF'
              firstLine='Verifique agora mesmo a'
              secondLine='situação cadastral do seu CPF.'
              link='VERIFICAR'
            />
          </View>
        </Pressable >
        <Pressable  style={styles.cardWrapper} onPress={()=> onCardSelect(2)}>
          <View style={styles.cardWrapper1}>
          <Card
            imageUrl={money}
            heading='Limpar Seu Nome'
            firstLine='Clique aqui para saber como'
            secondLine='limpar seu nome.'
            link='LIMPAR MEU NOME'
          />
          </View>
        </Pressable >
        <View style={styles.cardWrapper}>
          <Card
            imageUrl={pigWithMoney}
            heading='Renda Extra'
            firstLine='Aprenda a criar renda extra'
            secondLine='clicando aqui.'
            link='CONHEÇA'
          />
        </View>
        <Pressable  style={styles.cardWrapper} onPress={()=> onCardSelect(3)}>
          <View style={styles.cardWrapper1}>
          <Card
            imageUrl={lockAndKey}
            heading='Política de Privacidade'
            firstLine='Veja nossas diretrizes de segurança'
            secondLine='e políticas de privacidade.'
            link='VEJA'
          />
          </View>
        </Pressable>
      </View>
    </View>
    </ScrollView>

  );
}

export default Consulta;