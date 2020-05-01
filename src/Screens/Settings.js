import React from 'react';
import {
  Text,
  TouchableHighlight,
  Alert,
  Linking,
  StyleSheet,
  ScrollView,
  Share
} from 'react-native';

const Settings = props => {
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
      <TouchableHighlight
        activeOpacity={0.5}
        onPress={() => {
          Linking.openURL('market://details?id=com.maskedmanmec');
        }}>
        <Text style={styles.menutext}>Check for Updates</Text>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.5}
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
      </TouchableHighlight>

      <TouchableHighlight activeOpacity={0.5} onPress={() => onShare()}>
        <Text style={styles.menutext}>Share</Text>
      </TouchableHighlight>

      <TouchableHighlight activeOpacity={0.5} onPress={() => props.navigation.navigate('Credits')}>
        <Text style={styles.menutext}>Credits</Text>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.5}
        onPress={() => {
          Alert.alert('About', 'Version 1.5', [], {cancelable: true});
        }}>
        <Text style={styles.menutext}>About</Text>
      </TouchableHighlight>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    borderTopWidth: 1,
    borderColor: 'white'
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
