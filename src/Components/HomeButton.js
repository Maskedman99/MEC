import React from 'react';
import {Text, Pressable, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeButton = props => {
  const navigation = useNavigation();

  return (
    <Pressable
      android_ripple={{color: 'lime'}}
      onPress={() => navigation.navigate(props.navscreen)}
      style={styles.button}>
      <Image style={styles.img} source={props.img} />
      <Text style={styles.textstyle}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 120,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#388e3c',
    borderRadius: 2,
    margin: 1
  },
  textstyle: {
    color: 'white',
    fontWeight: 'bold'
  },
  img: {
    height: '45%',
    width: '35%',
    marginBottom: '1.5%',
    resizeMode: 'stretch'
  }
});

export default HomeButton;
