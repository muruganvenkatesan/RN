import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as mixins from '../common/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    // padding: 15,
    flexDirection: 'row',
  },
  container1: {
    width: mixins.calculateWidthPercent('30%'),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue'
  },
  image: {
    width: mixins.calculateWidthPercent('30%'),
    height: mixins.calculateHeightPercent('11%'),
    resizeMode: 'center',
    // backgroundColor: 'red'
  },
  container2: {
    width: mixins.calculateWidthPercent('56%'),
    // width: '65%',
    // height: '100%',
    justifyContent: 'center',
    paddingLeft: mixins.moderateScale(1),
    // backgroundColor: 'red',
  },
  heading: {
    fontSize: mixins.moderateScale(13, 0.3),
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  desc: {
    fontSize: mixins.moderateScale(11, 0.3),
    color: 'black',
    textAlign: 'left',
  },
  link: {
    marginTop: mixins.moderateScale(18),
    fontSize: mixins.moderateScale(12, 0.3),
    color: '#513CDE',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    paddingRight: mixins.moderateScale(19),
  },
  extraSpace:{
    marginTop: mixins.moderateScale(10),
  },
  nomargin:{
    marginTop: mixins.moderateScale(10),
  },
});

function Card(props) {
  const { imageUrl, heading, firstLine, secondLine, link,limpar, thirdLine, secondHeading } = props;
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image style={styles.image} source={imageUrl} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.heading}>{heading}</Text>
        {secondHeading && <Text style={styles.heading}>{secondHeading}</Text> }
        <Text style={[styles.desc, limpar? styles.extraSpace : null]}>{firstLine}</Text>
        <Text style={styles.desc}>{secondLine}</Text>
        {limpar && <Text style={styles.desc}>{thirdLine}</Text>}
        
        <Text style={[styles.link, limpar? styles.nomargin : null]}>{link}</Text>
      </View>
    </View>
  );
}

export default Card;