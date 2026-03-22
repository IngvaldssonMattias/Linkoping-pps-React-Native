import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './src/components/Timer/Timer';
import React from 'react';
import { Styles } from './src/styles/Timer.style';

export default function App() {
  return (
    <View style={Styles.container}>
      <Timer />
      <StatusBar style="auto" />
    </View>
  );
}

