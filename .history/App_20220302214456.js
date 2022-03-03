import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from "./components/ListItem";
import articles from "./dummies/articles";

export default function App() {
  const items = articles.map(article => {return(
    <ListItem 
      imageUrl={article.urlToImage}
      title={article.title}
      author={article.author}
    />
  )})
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
      flexDirection: "row"
    },
    leftContainer: {
      width: 100,
    },
    rightContainer: {
      flex: 1,
      padding: 10,
      justifyContent: "space-between",
    },
    stretch: {
      width: 100,
      height: 100,
    },
    text: {
      fontSize: 16,
    },
    subText: {
      fontSize: 12,
      color: 'gray',
    }
  });
  
  return (
    <View style={styles.container}>
      <ListItem 
        author="SampleNews" 
        imageUrl="https://picsum.photos/200/300"
        title="こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、"
      />
      
    </View>  
  );
}

