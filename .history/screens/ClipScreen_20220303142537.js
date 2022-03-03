import React from "react";
import { StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
  },
})

export default ClipScreen = () => {
  return (
    <SafeAreaView style={styles.container}
      <Text>Clip Screen</Text>
    </SafeAreaView>
  )
}