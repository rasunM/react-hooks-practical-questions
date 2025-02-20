/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.safePadding}>
      <Text>This is the text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safePadding: {
    paddingHorizontal: '5%',
    paddingVertical: '10%'
  },
});

export default App;
