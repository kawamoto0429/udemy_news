import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ListItem() {
  const styles = StyleSheet.create({
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
    <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
        <Image
          style={styles.stretch}
          source={{uri: "https://picsum.photos/200/300" }}
        />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
          </Text>
          <Text style={styles.subText}>
            ReactNews
          </Text>
        </View>  
      </View>
  )
}