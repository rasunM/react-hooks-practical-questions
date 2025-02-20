import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PostModel} from './types/model_types';
import ItemCard from './components/item_card';

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

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.safePadding}>
      <Text style={styles.mainHeader}>Products List</Text>
      <FlatList
        data={products}
        keyExtractor={item => `key-${item.id}`}
        renderItem={({item}) => (
          <ItemCard
            title={item.title}
            description=""
            id={item.id}
            image={item.image}
            category={item.category}
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safePadding: {
    padding: '10%',
    backgroundColor: '#F3F3F3',
    flex: 1,  
  },
  mainHeader: {
    fontWeight: '600',
    fontSize: 25,
    marginBottom: 10,
  },
  flatListContainer: {
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
});

export default App;
