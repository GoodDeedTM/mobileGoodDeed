/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Header } from 'react-native-elements';

import MapPage from './pages/MapPage.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'GOOD DEED', style: { color: '#fff' } }}
            containerStyle={{height: 50, paddingVertical: 20}}
            leftContainerStyle={{paddingVertical: 20}}
          />
        <View style={{flex: 1}}>
          <MapPage style={{flex: 1}}></MapPage>
        </View>
      </View>
    );
  }
}