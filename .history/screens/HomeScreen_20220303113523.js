import React, {useState, useEffect} from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import ListItem from "./ListItem";
import Constants from "expo-constants"
import axios from "axios";

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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

  const [articles, setArticles] = useState([])
  useEffect(()=>{
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem = {({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item,index)=>index.toString()}  
      />
    </SafeAreaView>  
  );
}

