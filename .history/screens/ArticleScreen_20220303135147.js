import React from "react"
import { StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import {WebView} from "react-native-webview";
import {useDispatch} from "react-redux";
import {addClip} from "../store/actions/user";
import {deleteClip} from "../store/actions/user";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
  },
})

export default function Article({route}) {
  const {article} = route.params;
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={()=>{dispatch(addClip({clip:article}))}}>
        <Text style={{margin: 10, fontSize:30}}>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{dispatch(deleteClip({clip:article}))}}>
        <Text style={{margin: 10, fontSize:30}}>DELETE_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{uri: article.url}}/>
    </SafeAreaView>  
  )
}