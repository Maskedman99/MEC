import React from 'react';
import {Text, Alert, Linking, StyleSheet, ScrollView, Share, Pressable} from 'react-native';

const Settings = ({navigation}) => {
  const onShare = async () => {
    try {
      await Share.share(
        {
          message: 'https://play.google.com/store/apps/details?id=com.maskedmanmec',
          url: 'https://play.google.com/store/apps/details?id=com.maskedmanmec', //Only IOS
          title: 'Hey there, checkout this app!'
        },
        {
          dialogTitle: 'Share this app with your freinds!', // Android only
          excludedActivityTypes: ['com.apple.UIKit.activity.PostToTwitter'] // iOS only
        }
      );
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable
        android_ripple={{color: 'lime'}}
        onPress={() => {
          Linking.openURL('market://details?id=com.maskedmanmec');
        }}>
        <Text style={styles.menutext}>Check for Updates</Text>
      </Pressable>

      <Pressable
        android_ripple={{color: 'lime'}}
        onPress={() => {
          Alert.alert(
            'Create an Issue at:',
            'https://github.com/Maskedman99/MEC/issues',
            [
              {text: 'Cancel'},
              {
                text: 'Create Issue!',
                onPress: () => {
                  Linking.openURL('https://github.com/Maskedman99/MEC/issues');
                }
              }
            ],
            {cancelable: true}
          );
        }}>
        <Text style={styles.menutext}>Report Bugs</Text>
      </Pressable>

      <Pressable android_ripple={{color: 'lime'}} onPress={() => onShare()}>
        <Text style={styles.menutext}>Share</Text>
      </Pressable>

      <Pressable android_ripple={{color: 'lime'}} onPress={() => navigation.navigate('Credits')}>
        <Text style={styles.menutext}>Credits</Text>
      </Pressable>

      <Pressable
        android_ripple={{color: 'lime'}}
        onPress={() => {
          Alert.alert('About', 'Version 1.6', [], {cancelable: true});
        }}>
        <Text style={styles.menutext}>About</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1
  },
  menutext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    paddingLeft: 10,
    paddingTop: 30,
    paddingHorizontal: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#8bc34a'
  }
});

export default Settings;
