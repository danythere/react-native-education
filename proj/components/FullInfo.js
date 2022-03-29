import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { gStyle } from '../styles/style';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image, View } from 'react-native';

export default function FullInfo({ route }) {
  return (
    <View style={gStyle.main}>
      <Image source={{
        width: '100%',
        height: 200,
        uri: route.params.img
      }} />
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text styles={styles.full}>{route.params.full}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  full: {
    textAlign: 'center',
    marginTop: 20,
    color: '#f55151'
  }
})