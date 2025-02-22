import React, {useMemo, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {initialItems} from './utils';

function UseMemoQuestion() {
  const [count, setCount] = useState<number>(0);
  const [items] = useState(initialItems);

  //   const selectedItem = items.find(item => item.isSelected === true);
  const selectedItem = useMemo(() => {
    return items.find(item => item.isSelected === true);
  }, [items]);
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Text>Selected Item: {selectedItem?.id}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default UseMemoQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
