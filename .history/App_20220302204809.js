import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemContainer: {
      height: 100,
      width: "100%",
      borderColor: 'gray',
      borderWidth: 1,
    },
    leftContainer: {
      backgroundColor: "red",
    },
    rightContainer: {
      backgroundColor: "blue",
    }

  });
  
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View/>
        <View/>
      </View>
    </View>  
  );
}

