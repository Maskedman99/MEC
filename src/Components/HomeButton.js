import React from 'react';
import {View, Text, TouchableHighlight, Image, StyleSheet} from 'react-native';

const HomeButton = props => {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={() => props.nav.navigate(props.navscreen)}>
        <View style={styles.button}>
          <Image style={styles.img} source={props.img} />
          <Text style={styles.textstyle}>{props.title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#388e3c',
    borderRadius: 2,
    margin: '1%',
    borderColor: '#76ff03',
  },
  textstyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  img: {
    height: '45%',
    width: '35%',
    marginBottom: '1.5%',
    resizeMode: 'stretch',
  },
});

export default HomeButton;
