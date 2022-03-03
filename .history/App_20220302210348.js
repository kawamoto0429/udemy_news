import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
    },
    stretch: {
      width: 100,
      height: 100,
    },


  });
  
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
        <Image
          style={styles.stretch}
          source={{uri: "https://picsum.photos/200/300" }}
        />
        </View>
        <View style={styles.rightContainer}/>
          <Text numberOfLines={3}>
          ウィキペディアとは、世界中のボランティアの共同作業によって執筆及び作成されるフリーの多言語インターネット百科事典である。収録されている全ての内容がオープンコンテントで商業広告が存在しないということを特徴とし、
          </Text>
          <Text>
            ReactNews
          </Text>
      </View>
    </View>  
  );
}

