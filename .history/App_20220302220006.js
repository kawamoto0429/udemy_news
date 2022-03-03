import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ListItem from "./components/ListItem";
import articles from "./dummies/articles";

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

  const items = articles.map((article, index) => {return(
    <ListItem 
      id = {index}
      imageUrl={article.urlToImage}
      title={article.title}
      author={article.author}
    />
  )})
  
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem = {({ article, index }) => (
          <ListItem 
            id = {index}
            imageUrl={article.urlToImage}
            title={article.title}
            author={article.author}
          />
        )}
      />
    </View>  
  );
}

