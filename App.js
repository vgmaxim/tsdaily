/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './Screens/LoginScreen';
import MainMenuScreen from './Screens/MainMenuScreen';

const App: () => React$Node = () => {
  return (
    <>
      {<LoginScreen />}
      {/*<MainMenuScreen />*/}
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
