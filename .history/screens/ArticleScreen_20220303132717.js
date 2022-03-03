import React from "react"
import { StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
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
      <TouchableOpacity onPress={()=>{}}>
        <Text style={{margin: 10, fontSize:30}}>ADD_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{uri: article.url}}/>
    </SafeAreaView>  
  )
}