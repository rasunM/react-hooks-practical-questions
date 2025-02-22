import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {PostModel} from '../types/model_types';

function ItemCard({title, id, description, image, category}: PostModel) {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.textSection}>
        <Text>{category}</Text>
      </View>
    </View>
  );
}

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
    padding: 30,
    margin: 10,
    elevation: 9,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  textSection: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'left',
  },
});
