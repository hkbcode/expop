import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Text h1>Expo Starter With RN Element</Text>
      <StatusBar style="auto" />
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
