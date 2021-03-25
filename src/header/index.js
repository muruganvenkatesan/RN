import * as React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as mixins from '../common/mixins';

const styles = StyleSheet.create({
  container: {
    height: mixins.moderateScale(160),
    width: mixins.calculateWidthPercent('100%'),
    flexDirection: 'row',
    paddingTop: Platform.OS == 'android' ? mixins.moderateScale(25) : 0,
  },
  container1: {
    // width: '16%',
    width: mixins.calculateWidthPercent('16%'),
    justifyContent: 'center',
  },
  container2: {
    // width: '44%',
    width: mixins.calculateWidthPercent('44%'),
    justifyContent: 'center',
    // paddingTop: 30,
    // paddingLeft: 30,
  },
  container3: {
    // width: '40%',
    width: mixins.calculateWidthPercent('40%'),
  },
  heading: {
    fontSize: mixins.moderateScale(14, 0.3),
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  desc: {
    fontSize: mixins.moderateScale(11, 0.3),
    color: 'black',
    textAlign: 'left',
  },
  arrowImage: {
    tintColor: 'mediumblue',
    width: mixins.moderateScale(20),
    height: mixins.moderateScale(25),
    alignSelf: 'center',
    marginTop: mixins.moderateScale(-40),
  },
  image: {
    // width: '90%',
    // height: '90%',
    width: mixins.calculateWidthPercent('30%'),
    height: mixins.calculateHeightPercent('18%'),
    resizeMode: 'center',
    // marginLeft: mixins.moderateScale(-18),
    // backgroundColor: 'red',
  },
  widthAdjust: {
    // width: '100%',
    width: mixins.calculateWidthPercent('100%'),
  },
  center: {
    // backgroundColor: 'red',
    position: 'relative',
    // top: '15%',
    // left: '15%',
    top: mixins.calculateWidthPercent('4%'),
    left: mixins.calculateHeightPercent('3%'),
    fontSize: mixins.moderateScale(14, 0.3),
  },
  marginLeft :{
    marginLeft: mixins.moderateScale(-25),
    marginTop: mixins.moderateScale(10),
    // width: '85%',
    // height: '85%',
    width: mixins.calculateWidthPercent('28%'),
    height: mixins.calculateHeightPercent('15%'),
  }

});

function Header(props) {
  const { bgColor, imageUrl, heading, firstLine, secondLine, politia, secondHeading } = props;
  const backButton = require('../../assets/icons/icon_back.png');
  const navigation = useNavigation();

  function onBack() {
    navigation.goBack();
  }
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Pressable style={styles.container1} onPress={onBack}>
        <Image style={styles.arrowImage} source={backButton} />
      </Pressable>
      <View style={[styles.container2, !imageUrl ? styles.widthAdjust : null]}>
        <Text style={[styles.heading, politia ? styles.center : null]}>
          {heading}
        </Text>
        {secondHeading && <Text style={[styles.heading, politia ? styles.center : null]}>{secondHeading}</Text> }
        <Text style={styles.desc}>
          {firstLine}
        </Text>
        <Text style={styles.desc}>
          {secondLine}
        </Text>
      </View>
      {imageUrl && <View style={styles.container3}>
        <Image style={[styles.image, politia ? styles.marginLeft : null]} source={imageUrl} />
      </View>}
    </View>
  );
}

export default Header;