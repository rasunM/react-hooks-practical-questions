/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PostModel} from './types/model_types';

function App(): React.JSX.Element {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<PostModel[]>([]);

  const getData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.safePadding}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={products}
          keyExtractor={product => `key-${product.id}`}
          renderItem={product => (
            <Text style={styles.itemCard}>{product.item.id} - {product.item.title}</Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  safePadding: {
    padding: '10%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemCard: {
    gap: 10,
  },
  items: {
    alignItems: 'center'
  }
});

export default App;
