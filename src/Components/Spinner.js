import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="white" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000'
  }
});

export default Spinner;
