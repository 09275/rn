import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// The most important thing to remember is that 'flexDirection',
// 'justifyContent' and 'alignItems' are always going to be
// placed on some parent element and that is going to customize
// how the children inside of it are displayed.

// 'justifyContent' works on the same axis as 'flexDirection',
// while 'alignItems' works on the axis vertical to 'flexDirection'

// Most used flex properties:
// #------- Parent ---------#
// alignItems, justifyContent, flexDirection

// #------- Child ----------#
// flex, alignSelf

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} /> 
      <View style={styles.viewTwoStyle} /> 
      <View style={styles.viewThreeStyle} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3, 
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    marginTop: 50
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'purple'
  },
});

export default BoxScreen;