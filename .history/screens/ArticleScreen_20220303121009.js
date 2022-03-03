import React from "react"
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native';
import {WebView} from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
  },
})

export default function Article({route}) {
  const {article} = route.params;
  console.log(article)
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: "https://expo.io"}}/>
    </SafeAreaView>  
  )
}